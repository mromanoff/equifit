define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');
    var ErrorModule;

    ErrorModule =  Backbone.View.extend({
        manage: true,
        template: 'error',

        serialize: function () {
            //return app.store.toJSON();
        }
    });

    module.exports = ErrorModule;
});