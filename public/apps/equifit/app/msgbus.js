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
     * Get Equifits
     */
    msgBus.commands.setHandler('equifits:get', function(clientId){
        require(['controllers/equifits'], function (controller) {
            controller.getEquifits(clientId);
        });
    });

    /***
     * Get Equifit
     */
    msgBus.commands.setHandler('equifit:get', function(equifitId){
        require(['controllers/equifit'], function (controller) {
            controller.getEquifit(equifitId);
        });
    });

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
     * Get Form
     */
    msgBus.commands.setHandler('form:get', function(formId){
        require(['controllers/form'], function (controller) {
            controller.getForm(formId);
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
     * Auto Save Form
     */
    msgBus.commands.setHandler('form:auto:save', function(form){
        require(['controllers/form'], function (controller) {
            controller.autoSaveForm(form);
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
     * Set Data Storage
     */
    msgBus.commands.setHandler('store:set', function(options){
        app.store.set(options);
    });

    /***
     * Get Data Storage
     */

    //msgBus.reqres.setHandler('store:get', function (attribute) {
    //    console.log('get store property', attribute);
    //    return app.store.get(attribute);
    //});

    /***
     * Create Modal
     */
    msgBus.commands.setHandler('modal:prompt:show', function(model){
        require(['controllers/modal'], function (controller) {
            controller.prompt(model);
        });
    });

    /***
     * Create simple Modal
     */
    msgBus.commands.setHandler('modal:confirmation:show', function(model){
        require(['controllers/modal'], function (controller) {
            controller.confirmation(model);
        });
    });

    /***
     * Show loading view
     */
    msgBus.commands.setHandler('loading:show', function(options){
        require(['controllers/loading'], function (controller) {
            controller.show(options);
        });
    });

    /***
     * Hide loading view
     */
    msgBus.commands.setHandler('loading:hide', function(){
        require(['controllers/loading'], function (controller) {
            controller.hide();
        });
    });

    msgBus.commands.setHandler('equifit:error', function(model, jqXHR, textStatus){
        require(['controllers/error'], function (controller) {
            controller.init(model, jqXHR, textStatus);
        });
    });

    module.exports = msgBus;
});