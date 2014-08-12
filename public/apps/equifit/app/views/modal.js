define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var ModalView;

    ModalView = Backbone.View.extend({
        manage: true,
        template: 'modal',

        initialize: function (options){
            var options = options || {};
            this.title = options.title || 'Modal';
            this.message = options.message || 'Modal Text going here';
        },

        serialize: function () {
            return { title: this.title, message: this.message };
        }
    });

    module.exports = ModalView;
});