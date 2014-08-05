define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var Backbone = require('backbone');
    var Form = require('backbone-forms');

    var FormView;

    FormView =  Backbone.View.extend({
        manage: true,

        beforeRender: function () {
            // extend BB model with forms schema and fieldset
            var FormModel = Backbone.Model.extend({
                schema: this.model.get('schema'),
                fieldsets: this.model.get('fieldsets')
            });

            // set model instance with data
            var model = new FormModel(this.model.get('data'));

            // render form
            var form = new Form({
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