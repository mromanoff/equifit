/**
 * Created by mromanoff on 8/28/14.
 */
define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Wreqr = require('backbone.wreqr');


    var msgBus = {
        reqres: new Wreqr.RequestResponse(),
        commands: new Wreqr.Commands(),
        events: new Wreqr.EventAggregator()
    };


    // event name
    // {what}:{command}


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
    //msgBus.on('equifit:equifit:create', function(templateId){
    //    require(['controllers/equifit'], function (controller) {
    //        controller.createNew(templateId);
    //    });
    //});

    msgBus.commands.setHandler('equifit:create', function(){
        require(['controllers/equifit'], function (controller) {
            controller.createEquifit();
        });
    });

    /***
     * Update Equifit
     */
    //msgBus.on('equifit:equifit:update', function(model){
    //    require(['controllers/equifit'], function (controller) {
    //        controller.update(model);
    //    });
    //});

    msgBus.commands.setHandler('equifit:update', function(equifit){
        require(['controllers/equifit'], function (controller) {
            controller.updateEquifit(equifit);
        });
    });

    /***
     * Create new Form
     */
    //msgBus.on('equifit:form:create', function(templateId){
    //    require(['controllers/form'], function (controller) {
    //        controller.createNew(templateId);
    //    });
    //});

    /***
     * Update Form
     */
    //msgBus.on('equifit:form:update', function(model){
    //    require(['controllers/form'], function (controller) {
    //        controller.update(model);
    //    });
    //});


    /***
     * Helper Event triggers
     * @type {Object}
     */

    msgBus.commands.setHandler('scroll:top', function () {
        require(['controllers/helper'], function (controller) {
            controller.scrollTop();
        });
    });

    /***
     * Update Data Storage
     */
    msgBus.commands.setHandler('store:set', function(options){

        console.log('set store with', options);

        app.store.set(options);
    });

    /***
     * Create Modal
     */
    msgBus.commands.setHandler('modal:show', function(options){
        require(['controllers/modal'], function (controller) {
            controller.init(options);
        });
    });

    //msgBus.on('equifit:error', function(error){
    //    require(['controllers/error'], function (controller) {
    //        controller.init(error);
    //    });
    //});



    //msgBus.on('equifit:entities', function () {
    //    console.log('triggered');
    //    //return API.getEquifitEntities();
    //    //require(['entities/equifits'], function (controller) {
    //    //    console.log('now require');
    //    //    controller.API.getEquifitEntities();
    //    //});
    //
    //});


    module.exports = msgBus;
});