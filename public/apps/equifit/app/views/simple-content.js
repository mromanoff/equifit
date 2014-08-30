define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');
    var SimpleContentModule;

     SimpleContentModule=  Backbone.View.extend({
        manage: true,
        template: 'simple-content',

        serialize: function () {
            return {content: this.model};
        }
    });

    module.exports = SimpleContentModule;
});