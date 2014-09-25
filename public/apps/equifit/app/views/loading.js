define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');
    var Spinner = require('spin');
    var LoadingViewModule;

    LoadingViewModule =  Backbone.View.extend({
        manage: true,
        id: 'spinner',

        initialize: function () {
            this.opts = {
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
                zIndex: 2e9 // The z-index (defaults to 2000000000)
            };
        },

        afterRender: function () {
            new Spinner(this.opts).spin(document.getElementById(this.el.id));
            $('.' + this.opts.className).prepend(
                '<div class="block-view"></div><div class="spinner-block"><small>' + this.model.get('message') + '</small></div>'
            );
        }
    });

    module.exports = LoadingViewModule;
});