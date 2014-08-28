define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var MessageView = require('views/message');
    var EquifitView;

    var Item = Backbone.View.extend({
        manage: true,
        template: 'form-item',
        tagName: 'li',
        events: {
            'click': 'showForm'
        },

        initialize: function () {
            console.log('view equfit ', this.model);
        },

        serialize: function () {
            return this.model.toJSON();
        },

        showForm: function (e) {
            e.preventDefault();
            var url = 'client/' + app.store.get('clientId') + '/equifit/' + app.store.get('equifitId');

            console.log('view equfit id ', this.model.id);

            if(!_.isUndefined(this.model.id)) {
                url = url + '/form/' + this.model.id;
                app.router.navigate(url, {trigger: true});

            } else {
                msgBus.trigger('equifit:form:create', this.model.get('templateId'));
            }
        }
    });

    var ItemEmpty = Backbone.View.extend({
        manage: true,
        template: 'form-item-empty'
    });

    EquifitView = Backbone.Layout.extend({
        template: 'equifit',

        events: {
            'click .submit': 'updateEquifit',
            'click [data-url]': 'showPage'
        },

        showPage: function (e) {
            e.preventDefault();
            var url = $(e.currentTarget).data('url');
            console.log('navigate', url);
            app.router.navigate(url, {trigger: true});
        },

        beforeRender: function () {
            var documents = new Backbone.Collection(this.model.get('documents'));

            // check if consent form is signed
            if (!app.store.get('isSigned')) {
                this.setView('.message', new MessageView());
            }

            // check if there is no items in collection
            if (_.isEqual(_.size(documents), 0)) {
                this.insertView('.list', new ItemEmpty());
            } else {
                documents.each(function (item) {
                    // create id from id or _id (mongo)
                    item.id  = item.get('id') || item.get('_id'); // || null;

                    this.insertView('.list', new Item({
                        model: item
                    }));
                }, this);
            }
        },

        serialize: function () {
            return app.store.toJSON();
        },

        updateEquifit: function (e) {
            e.preventDefault();
            msgBus.trigger('equifit:equifit:update', this.model);
        }
    });

    module.exports = EquifitView;
});