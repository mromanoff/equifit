define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');

    module.exports =  Backbone.View.extend({
        manage: true,
        el: false,
        template: 'message'
    });
});