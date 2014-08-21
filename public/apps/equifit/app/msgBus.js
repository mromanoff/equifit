define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = _.extend({}, Backbone.Events);


    // event name
    // {app name}:{what}:{command}
    //equifit:title:update


    //msgBus.on('scroll:top', function () {
    //    return controller.scroll();
    //});

    // update page title
    msgBus.on('equifit:title:update', function (title){
        $('title').text(title);
    });

    msgBus.on('equifit:store:update', function(options){
        console.log('update store model with', options);
        app.store.set(options);
        //console.log('store model updated', app.store.toJSON());
    });

    msgBus.on('equifit:equifit:create', function(){
        require(['controllers/equifit'], function (controller) {
            controller.createNew();
        });
    });

    msgBus.on('equifit:equifit:update', function(model){
        require(['controllers/equifit'], function (controller) {
            controller.update(model);
        });
    });

    msgBus.on('equifit:form:create', function(templateId){
        require(['controllers/form'], function (controller) {
            controller.createNew(templateId);
        });
    });

    msgBus.on('equifit:form:update', function(model){
        require(['controllers/form'], function (controller) {
            controller.update(model);
        });
    });

    msgBus.on('equifit:modal:create', function(options){
        require(['controllers/modal'], function (controller) {
            controller.init(options);
        });
    });

    module.exports = msgBus;
});