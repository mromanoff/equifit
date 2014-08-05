define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var Backbone = require('backbone');
    var store = require('../entities/store');

    var BreadcrumbView;

    BreadcrumbView =  Backbone.View.extend({
        manage: true,
        template: 'breadcrumb',
        model: store
    });

    module.exports = BreadcrumbView;
});