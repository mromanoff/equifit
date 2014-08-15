define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var Form = require('backbone-forms');
    var FormView;
    var form;

    //app.store.set({
    //    slug: 'form'
    //});

    FormView =  Backbone.View.extend({
        manage: true,
        template: 'form',
        events: {
            'click .submitForm': 'submitForm'
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

            // render form
            form = new Form({
                model: new FormModel(this.model.get('data'))
            }).render();
        },

        afterRender: function () {
            // append form to the rendered view.
            this.$el.find('.form').html(form.el);
        },

        submitForm: function (e) {
            e.preventDefault();
            //TODO: validate form before submitting
            console.log('submit form');
        }
    });

    module.exports = FormView;
});