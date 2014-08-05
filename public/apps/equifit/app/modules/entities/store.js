/**
 * Store Module
 * description: Get adn Set common data during app lifespan
 */

define(function (require, exports, module) {
    "use strict";

    var Backbone = require('backbone');

    var Store;

    Store = Backbone.Model.extend({
        defaults: {
            appFlow: null,
            slug: null,
            pageTitle: null,
            memberName: null,
            memberId: null,
            equifitId: null,
            equifitDate: null,
            formName: null,
            formId: false
        }
    });

    // return instance
    module.exports = new Store();
});
