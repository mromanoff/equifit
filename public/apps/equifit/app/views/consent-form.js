define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var ConsentForm;

    ConsentForm =  Backbone.View.extend({
        manage: true,
        template: 'consent-form',
        events: {
            'click .submit': 'submitForm'
        },

        submitForm: function (e) {
            e.preventDefault();
            //TODO: validate form before submitting
            console.log('submit form');
        }
    });

    module.exports = ConsentForm;
});