define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var Backbone = require('backbone');

    var ActionView;

    ActionView =  Backbone.View.extend({
        manage: true,
        el: false,
        template: 'action',
        events: {
            'click .createNew': 'createNew',
            'click .printBlankForm': 'printForm'
        },

        serialize: function () {
            return this.model;
        },

        printForm: function (e) {
            e.preventDefault();
            console.log('printBlankForm');
            window.location.href = '/assets/files/equifit-forms.pdf';
        },

        createNew: function (e) {
            e.preventDefault();
            console.log('Create New');
            app.router.navigate('/equifit/create', { trigger: true });
        }
    });

    module.exports = ActionView;
});