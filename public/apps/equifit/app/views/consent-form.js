/*
define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var ConsentFormView;

    app.store.set({
        pageTitle: 'Consent Form',
        slug: 'forms'
    });

    ConsentFormView =  Backbone.View.extend({
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

    module.exports = ConsentFormView;
});*/
