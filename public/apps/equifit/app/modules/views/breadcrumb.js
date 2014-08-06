define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var Backbone = require('backbone');

    var BreadcrumbView;

    BreadcrumbView =  Backbone.View.extend({
        manage: true,
        template: 'breadcrumb',

        serialize: function () {
            return app.store.toJSON();
        }
    });

    module.exports = BreadcrumbView;
});