define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = _.extend({}, Backbone.Events);


    // event name
    // {app name}:{what}:{command}


    /***
     * Get all Equifits
     */
        //msgBus.on('equifit:equifit:getAll', function(){
        //    require(['controllers/equifit'], function (controller) {
        //        controller.createNew();
        //    });
        //});

    /***
     * Create new Equifit
     */
    msgBus.on('equifit:equifit:create', function(){
        require(['controllers/equifit'], function (controller) {
            controller.createNew();
        });
    });

    /***
     * Update Equifit
     */
    msgBus.on('equifit:equifit:update', function(model){
        require(['controllers/equifit'], function (controller) {
            controller.update(model);
        });
    });

    /***
     * Create new Form
     */
    msgBus.on('equifit:form:create', function(templateId){
        require(['controllers/form'], function (controller) {
            controller.createNew(templateId);
        });
    });

    /***
     * Update Form
     */
    msgBus.on('equifit:form:update', function(model){
        require(['controllers/form'], function (controller) {
            controller.update(model);
        });
    });


    /***
     * Helper Event triggers
     * @type {Object}
     */

        //msgBus.on('scroll:top', function () {
        //    return controller.scroll();
        //});

    /***
     * Update page Title
     */
    msgBus.on('equifit:title:update', function (title){
        $('title').text(title);
    });

    /***
     * Update Data Storage
     */
    msgBus.on('equifit:store:update', function(options){
        console.log('update store model with', options);
        app.store.set(options);
        //console.log('store model updated', app.store.toJSON());
    });

    /***
     * Create Modal
     */
    msgBus.on('equifit:modal:create', function(options){
        require(['controllers/modal'], function (controller) {
            controller.init(options);
        });
    });

    msgBus.on('equifit:error', function(options){
        require(['controllers/error'], function (controller) {
            controller.init(options);
        });
    });

    module.exports = msgBus;
});