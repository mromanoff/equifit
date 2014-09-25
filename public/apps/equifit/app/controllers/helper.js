define(function (require, exports, module) {
    'use strict';

    var helperModule = {};

    helperModule.scrollTop = function () {
        $(document).scrollTop(0);
        $('#main').css({ opacity: 0 }).animate({ opacity: 1 }, 400);
    };

    //helperModule.update = function (model) {
    //
    //};

    module.exports = helperModule;
});