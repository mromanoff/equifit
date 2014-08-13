define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var Spinner = require('spin');
    var LoadingViewModule;

    LoadingViewModule =  Backbone.View.extend({
        manage: true,
        id: 'spinner',
        className: 'text-center',
        template: 'loading',

        initialize: function(opt){
            var options = _.extend({}, opt);
            this.title = options.title || "Loading Data";
            this.message = options.message || "Please wait, data is loading.";
        },

        serialize: function () {
            return { title: this.title, message: this.message };
        },

        afterRender: function () {
            var opts = {

                lines: 13, // The number of lines to draw
                length: 7, // The length of each line
                width: 2, // The line thickness
                radius: 10, // The radius of the inner circle
                corners: 0, // Corner roundness (0..1)
                rotate: 0, // The rotation offset
                direction: 1, // 1: clockwise, -1: counterclockwise
                color: '#000', // #rgb or #rrggbb
                speed: 1, // Rounds per second
                trail: 52, // Afterglow percentage
                shadow: false, // Whether to render a shadow
                hwaccel: false, // Whether to use hardware acceleration
                className: 'spinner', // The CSS class to assign to the spinner
                zIndex: 2e9, // The z-index (defaults to 2000000000)


            };

            var target = document.getElementById(this.el.id);
            new Spinner(opts).spin(target);
        }
    });

    module.exports = LoadingViewModule;
});