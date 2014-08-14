/**
 * Store Module
 * description: Get adn Set common data during app lifespan
 */

define(function (require, exports, module) {
    "use strict";

    var Backbone = require('backbone');
    var StoreEntity;

    StoreEntity = Backbone.Model.extend({
        defaults: {
            title: null,
            memberId: null,
            memberName: null,
            appointmentAt: null,
            isSigned: null,

            url: null,

            isValidated: null,
            slug: null,
            equifitId: null,
            formName: null,
            formId: null
        }
    });

    // return instance
    module.exports = StoreEntity;
});
