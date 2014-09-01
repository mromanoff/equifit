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
            var url = 'client/' + app.store.get('clientId') + '/equifit/' + app.store.get('equifitId');

            console.log('click on this form ', this.model);

            if(_.isEmpty(this.model.get('_id'))) {
                console.log('this model doesn\'t have an ID');
                console.warn('create new form with template id', this.model.get('templateId'));
                msgBus.trigger('equifit:form:create', this.model.get('templateId'));
            }
            else {
                console.log('this model have an ID');
                url = url + '/form/' + this.model.get('_id');
                app.router.navigate(url, {trigger: true});
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
            msgBus.commands.execute('equifit:update', this.model);
        }
    });

    module.exports = EquifitView;
});