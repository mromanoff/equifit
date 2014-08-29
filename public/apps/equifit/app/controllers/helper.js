define(function (require, exports, module) {
    'use strict';

    var helperModule = {};

    helperModule.scrollTop = function () {
        $(document).scrollTop(0);
        $('#app-main').css({ opacity: 0 }).animate({ opacity: 1 }, 600);
    };

    //helperModule.update = function (model) {
    //
    //};

    module.exports = helperModule;
});