define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var Backbone = require('backbone');
    require('backbone-forms');

    var FormView;

    FormView =  Backbone.View.extend({
        manage: true,
        //template: 'equifit/form',
        initialize: function () {
            console.log('form view model', this.model);
        },

        beforeRender: function () {
            // extend BB model with forms schema and fieldset
            var FormModel = Backbone.Model.extend({
                schema: this.model.get('schema'),
                fieldsets: this.model.get('fieldsets')
            });

            // set model instanse with data
            var model = new FormModel(this.model.get('data'));

            // render form
            var form = new Backbone.Form({
                model: model
            }).render();

            this.$el.html(form.el);
        },

        afterRender: function () {
            this.$el.append('<button type="button" class="btn btn-primary">Submit</button>');
        }

    });

    module.exports = FormView;
});