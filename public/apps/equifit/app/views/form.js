define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var Backbone = require('backbone');
    var Form = require('backbone-forms');
    //var FormEntity = require('entities/form');
    var FormView;
    var form;

    FormView =  Backbone.View.extend({
        manage: true,
        template: 'form',
        events: {
            'click .update': 'updateForm'
        },

        initialize: function () {
            console.log('form model', this.model);
        },

        beforeRender: function () {
            // extend BB model with forms schema and fieldsets
            var FormModel = Backbone.Model.extend({
                schema: this.model.get('schema'),
                fieldsets: this.model.get('fieldsets')
            });

            var formModel =  new FormModel(this.model.get('data'));

            // render form
            form = new Form({
                model: formModel
            }).render();
        },

        afterRender: function () {
            // append form to the rendered view.
            this.$el.find('.form').html(form.el);
        },

        updateForm: function (e) {
            e.preventDefault();
            //TODO: validate form before submitting
            var errors = form.commit();

            this.model.set({data: form.model.toJSON()});

            console.log('form errors', errors);
            console.log('form commit', form.model);
            console.log('this commit', this.model);

            msgBus.trigger('equifit:form:update', this.model);
        }
    });

    module.exports = FormView;
});