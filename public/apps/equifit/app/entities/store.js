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
            slug: null,
            pageTitle: null,
            memberName: null,
            memberId: null,
            equifitId: null,
            equifitDate: null,
            formName: null,
            formId: null,
            isSigned: null
        }
    });

    // return instance
    module.exports = StoreEntity;
});
