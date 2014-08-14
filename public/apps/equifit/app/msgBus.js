define(function (require, exports, module) {
    'use strict';

    var msgBus = _.extend({}, Backbone.Events);

    //msgBus.on('scroll:top', function () {
    //    return controller.scroll();
    //});

    // update page title
    msgBus.on('app:update:title', function (title){
        $('title').text(title);
    });

    module.exports = msgBus;
});