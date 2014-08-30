/**
 * Created by mromanoff on 8/28/14.
 */
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
    msgBus.on('equifit:equifit:create', function(templateId){
        require(['controllers/equifit'], function (controller) {
            controller.createNew(templateId);
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

    msgBus.on('scroll:top', function () {
        require(['controllers/helper'], function (controller) {
            controller.scrollTop();
        });
    });

    /***
     * Update Data Storage
     */
    msgBus.on('equifit:store:update', function(options){
        app.store.set(options);
    });

    /***
     * Create Modal
     */
    msgBus.on('equifit:modal:create', function(options){
        require(['controllers/modal'], function (controller) {
            controller.init(options);
        });
    });

    msgBus.on('equifit:error', function(error){
        require(['controllers/error'], function (controller) {
            controller.init(error);
        });
    });

    module.exports = msgBus;
});