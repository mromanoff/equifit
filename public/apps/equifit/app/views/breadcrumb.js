define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');

    var BreadcrumbViewModule;

    BreadcrumbViewModule =  Backbone.View.extend({
        manage: true,
        template: 'breadcrumb',

        events: {
            'click [data-url]': 'showPage'
        },

        showPage: function (e) {
            e.preventDefault();
            var url = $(e.currentTarget).data('url');
            console.log('navigate', url);
            app.router.navigate(url, {trigger: true});
        },

        serialize: function () {
            return app.store.toJSON();
        }
    });

    module.exports = BreadcrumbViewModule;
});