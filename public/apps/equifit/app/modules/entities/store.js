define(function (require, exports, module) {
    "use strict";

    var Backbone = require('backbone');

    var Store;

    Store = Backbone.Model.extend({
        defaults: {
            flow: null,
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
