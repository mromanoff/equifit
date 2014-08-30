/**
 * Store Module
 * description: Get adn Set common data during app lifespan
 */

define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');
    Backbone.LocalStorage = require('localstorage');
    //var msgBus = require('msgbus');
    var StoreEntity;

    StoreEntity = Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage('Equifit'),

        defaults: {
            title: null,
            clientId: null,
            clientName: null,
            appointmentAt: null,
            isSigned: null,
            isValidated: null,
            equifitName: null,
            equifitId: null,
            formName: null,
            formId: null,
            forms: null
        },

        initialize: function () {
            this.on('change', this.updateStorage);
            this.on('change:title', this.updatePageTitle);
        },

        updateStorage: function () {
            this.save();
        },

        updatePageTitle: function () {
            $('title').text(this.get('title'));
        }
    });

    // return instance
    module.exports = StoreEntity;
});
