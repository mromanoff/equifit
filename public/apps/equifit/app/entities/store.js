/**
 * Store Module
 * description: Get adn Set common data during app lifespan
 */

define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');
    Backbone.LocalStorage = require('localstorage');
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
           // slug: null,
            equifitName: null,
            equifitId: null,
            formName: null,
            formId: null,
            forms: null
        },

        initialize : function () {
            this.on('change', this.updateStorage);
        },

        updateStorage: function () {
            this.save();
        }
    });

    // return instance
    module.exports = StoreEntity;
});
