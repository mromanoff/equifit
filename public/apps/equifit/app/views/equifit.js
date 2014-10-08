define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var msgBus = require('msgbus');
    var ConsentMessageView = require('views/consent-form-message');
    var EquifitView;

    var Item = Backbone.View.extend({
        manage: true,
        template: 'form-item',
        tagName: 'li',
        events: {
            'click .show-form': 'showForm'
        },

        serialize: function () {
            var data = {};
            data.title = this.model.get('title');

            if (_.isEqual(this.model.get('templateType'), 'InformedConsent')) {
                data.status = (app.store.get('isSigned')) ? 'Signed' : 'Not Signed';
                data.badge = (app.store.get('isSigned')) ? 'badge-success' : 'badge-important';
            } else {
                data.status = this.model.get('totalCompletedQuestions') + ' of ' + this.model.get('totalQuestions');
                data.badge = null;
            }
            return data;
        },

        /***
         * show form
         * @param e
         */
        showForm: function (e) {
            e.preventDefault();
            // pass plain JSON
            msgBus.commands.execute('form:show', this.model.toJSON());
        }
    });

    var ItemEmpty = Backbone.View.extend({
        manage: true,
        template: 'form-item-empty'
    });

    EquifitView = Backbone.Layout.extend({
        template: 'equifit',

        events: {
            'click .submit': 'updateEquifit'
        },

        beforeRender: function () {
            var documents = new Backbone.Collection(this.model.get('documents'));
            // check if consent form is signed
            if (!this.model.get('isSigned')) {
                this.setView('.message', new ConsentMessageView());
            }

            // check if there is no items in collection
            if (_.isEqual(_.size(documents), 0)) {
                this.insertView('.list', new ItemEmpty());
            } else {
                documents.each(function (model) {
                    model.set({parent: _.clone(this.model.toJSON())});
                    this.insertView('.list', new Item({
                        model: model
                    }));
                }, this);
            }
        },

        serialize: function () {
            return app.store.toJSON();
        },

        updateEquifit: function (e) {
            e.preventDefault();
            msgBus.commands.execute('equifit:update', this.model);
        }
    });

    module.exports = EquifitView;
});