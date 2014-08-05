define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var Backbone = require('backbone');

    var HeaderView;

    HeaderView =  Backbone.View.extend({
        manage: true,
        tagName: 'h1',
        template: 'header',

        serialize: function () {
            return app.store.toJSON();
        }
    });

    module.exports = HeaderView;
});