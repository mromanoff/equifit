define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var Backbone = require('backbone');
    var Form = require('backbone-forms');
    require('backbone-forms-template');
    var SimpleContent = require('views/simple-content');
    var FormView;
    var form;

    FormView = Backbone.View.extend({
        manage: true,
        template: 'form',
        events: {
            'click .update': 'updateForm',
            'click .show': 'showForm'
        },

        initialize: function () {
            //console.log('init form model', this.model);
            console.log('init app store', app.store.get('forms'));
        },

        beforeRender: function () {
            // extend BB model with forms schema and fieldsets
            var FormModel = Backbone.Model.extend({
                schema: this.model.get('schema'),
                fieldsets: this.model.get('fieldsets')
            });

            var formModel = new FormModel(this.model.get('data'));

            /***
             * render form
             */
            form = new Form({
                model: formModel
            }).render();


            // check if there is no items in collection
            //if (_.isEqual(_.size(this.collection), 0)) {
                this.insertView('.content', new SimpleContent({ model: this.model.get('content')}));
            //}


        },

        serialize: function () {
            return {
                forms: app.store.get('forms')
            };
        },

        afterRender: function () {
            // append form to the rendered view.
            this.$el.find('.form').html(form.el);
            //this.$el.find('.form').prepend(_.template('<% _.each(content, function(item){ %> <h2><%- item.title %></h2><p><%- item.text %></p> <% } ) %>', {content: this.model.get('content')}));
        },

        showForm: function (e) {
            e.preventDefault();
            var url = 'client/' + app.store.get('clientId') + '/equifit/' + app.store.get('equifitId') + '/form/' + $(e.currentTarget).data('id');
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
            }
            else {
                console.log('validate form');
            }
        }
    });

    module.exports = FormView;
});