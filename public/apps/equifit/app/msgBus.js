define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = _.extend({}, Backbone.Events);


    //msgBus.on('scroll:top', function () {
    //    return controller.scroll();
    //});

    // update page title
    msgBus.on('update:title', function (title){
        $('title').text(title);
    });

    msgBus.on('update:store', function(options){
        console.log('update store model with', options);
        app.store.set(options);
    });

    msgBus.on('create:modal', function(options){
        require(['controllers/modal'], function (controller) {
            controller.init(options);
        });
    });

    module.exports = msgBus;
});