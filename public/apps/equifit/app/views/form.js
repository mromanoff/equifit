define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var Backbone = require('backbone');
    var Form = require('backbone-forms');
    require('backbone-forms-template');
    var MessageView = require('views/message');
    var SimpleContent = require('views/simple-content');
    var FormView;
    var form;

    FormView = Backbone.Layout.extend({
        template: 'form',
        events: {
            'click .update': 'updateForm',
            'click [data-url]': 'showPage'
        },


        initialize: function () {
            console.log('Form data model', this.model);
        },

        beforeRender: function () {
            // extend BB model with forms schema and fieldsets
            var FormModel = Backbone.Model.extend({
                schema: this.model.get('schema'),
                fieldsets: this.model.get('fieldsets')
            });

            var formModel = new FormModel(this.model.get('data'));

            /***
             * render() form!!! backbone layout manager is not managing this view
             */
            form = new Form({
                model: formModel
            }).render();

            // check if consent form is signed
            if (!app.store.get('isSigned')) {
                this.setView('.message', new MessageView());
            }

            // check if there is no items in collection
            //if (_.isEqual(_.size(this.collection), 0)) {
                this.insertView('.content', new SimpleContent({ model: this.model.get('content')}));
            //}
        },

        serialize: function () {
            return app.store.toJSON();
        },

        afterRender: function () {
            // append form to the rendered view.
            this.$el.find('.form').html(form.el);
        },

        showPage: function (e) {
            e.preventDefault();
            var url = $(e.currentTarget).data('url');
            console.log('navigate', url);
            app.router.navigate(url, {trigger: true});
        },

        updateForm: function (e) {
            e.preventDefault();
            //TODO: validate form before submitting
            var errors = form.commit();

            this.model.set({data: form.model.toJSON()});

            console.log('form errors', errors);
            console.log('form commit', form.model);

            if (_.isEmpty(errors)) {
                msgBus.trigger('equifit:form:update', this.model);

                // only if templateTYpe === 'InformedConsent' redirect to Equifit Page
                // update equifit isSigned to true
                ////msgBus.trigger('equifit:equifit:update', { isSigned: true});


                if(_.isEqual(this.model.get('templateType'), 'InformedConsent')) {
                    var url = 'client/' + app.store.get('clientId') + '/equifit/' + app.store.get('equifitId');
                    app.router.navigate(url, {trigger: true});
                }
            }
            else {
                console.log('form did\'t pass validtion');
            }
        }
    });

    module.exports = FormView;
});