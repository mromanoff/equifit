define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var msgBus = require('msgbus');
    var MessageView = require('views/message');
    var EquifitView;

    var Item = Backbone.View.extend({
        manage: true,
        template: 'form-item',
        tagName: 'li',
        events: {
            'click a': 'showForm'
        },

        serialize: function () {
            var data = {};
            data.title = this.model.get('title');

            if (_.isEqual(this.model.get('templateType'), 'InformedConsent')) {
                data.status = app.store.get('isSigned') ? 'Signed' : 'Not Signed';
                data.badge = 'badge-important';
            } else {
                data.status = this.model.get('totalCompletedQuestions') + ' of ' + this.model.get('totalQuestions');
                data.badge = null;
            }
            return data;
        },

        /***
         * show form
         * description we need to create new form if it has no id or get form if it has id
         * @param e
         */
        showForm: function (e) {
            e.preventDefault();
           // var url = 'client/' + this.model.get('parent').clientId + '/equifit/' + this.model.get('parent')._id;
            console.log('this.model', this.model);

            if(_.isEmpty(this.model.get('_id'))) {
                console.log('this model doesn\'t have an id');
                console.warn('create new form with template id', this.model.get('templateId'));
                msgBus.commands.execute('form:create', this.model.get('templateId'));
            }
            else {
                console.log('this model have an Id');
                msgBus.commands.execute('form:get', this.model.get('_id'));
                url = url + '/form/' + this.model.get('_id');
                app.router.navigate(url);
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
            'click .submit': 'updateEquifit'
        },

        beforeRender: function () {
            var documents = new Backbone.Collection(this.model.get('documents'));
            // check if consent form is signed
            if (!this.model.get('isSigned')) {
                this.setView('.message', new MessageView());
            }

            // check if there is no items in collection
            if (_.isEqual(_.size(documents), 0)) {
                this.insertView('.list', new ItemEmpty());
            } else {
                documents.each(function (model) {
                    model.set({parent: _.clone(this.model.toJSON())});

                    // do not render "informed consent form" if it is signed
                    if(_.isEqual(model.get('templateType'), 'InformedConsent') && this.model.get('isSigned')) {
                        return false;
                    } else {
                        this.insertView('.list', new Item({
                            model: model
                        }));
                    }
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