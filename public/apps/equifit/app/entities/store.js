/**
 * Store Module
 * description: Get adn Set common data during app lifespan
 */

define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');
    var StoreEntity;

    StoreEntity = Backbone.Model.extend({
        defaults: {
            title: null,
            clientId: null,
            clientName: null,
            appointmentAt: null,
            isSigned: null,
            isValidated: null,
            slug: null,
            equifitName: null,
            equifitId: null,
            formName: null,
            formId: null,
            forms: null
        }
    });

    // return instance
    module.exports = StoreEntity;
});
