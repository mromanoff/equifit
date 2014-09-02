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
     * Create new Equifit
     */
    msgBus.commands.setHandler('equifit:create', function(){
        require(['controllers/equifit'], function (controller) {
            controller.createEquifit();
        });
    });

    /***
     * Update Equifit
     */
    msgBus.commands.setHandler('equifit:update', function(equifit){
        require(['controllers/equifit'], function (controller) {
            controller.updateEquifit(equifit);
        });
    });

    /***
     * Create new Form
     */
    msgBus.commands.setHandler('form:create', function(templateId){
        require(['controllers/form'], function (controller) {
            controller.createForm(templateId);
        });
    });

    /***
     * Update Form
     */
    msgBus.commands.setHandler('form:update', function(form){
        require(['controllers/form'], function (controller) {
            controller.updateForm(form);
        });
    });

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

    /***
     * Create simple Modal
     */
    msgBus.commands.setHandler('modal:simple:show', function(options){
        require(['controllers/simple-modal'], function (controller) {
            controller.init(options);
        });
    });

    //msgBus.on('equifit:error', function(error){
    //    require(['controllers/error'], function (controller) {
    //        controller.init(error);
    //    });
    //});

    module.exports = msgBus;
});