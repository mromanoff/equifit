define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');

    var ActionViewModule;

    ActionViewModule =  Backbone.View.extend({
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
            window.location.href = '/apps/equifit/assets/files/equifit-forms.pdf';
        },

        createNew: function (e) {
            e.preventDefault();
            app.router.navigate('/equifit/create', { trigger: true });
        }
    });

    module.exports = ActionViewModule;
});