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

    msgBus.commands.setHandler('equifit:error', function(error){
        require(['controllers/error'], function (controller) {
            controller.init(error);
        });
    });

    module.exports = msgBus;
});