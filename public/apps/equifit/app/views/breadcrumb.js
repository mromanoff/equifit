define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');

    var BreadcrumbViewModule;

    BreadcrumbViewModule =  Backbone.View.extend({
        manage: true,
        template: 'breadcrumb',

        serialize: function () {
            return app.store.toJSON();
        }
    });

    module.exports = BreadcrumbViewModule;
});