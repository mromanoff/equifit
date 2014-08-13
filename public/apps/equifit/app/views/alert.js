define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var AlertView;

    AlertView = Backbone.View.extend({
        manage: true,
        template: 'alert',

        initialize: function (opt){
            var options = _.extend({}, opt);
            this.type = options.type || 'alert-error';
            this.title = options.title || 'Consent Form';
            this.message = options.message || 'Not signed';
        },

        serialize: function () {
            return {
                type: this.type,
                title: this.title,
                message: this.message
            };
        }
    });

    module.exports = AlertView;
});