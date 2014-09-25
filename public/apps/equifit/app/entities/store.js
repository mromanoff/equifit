/**
 * Store Module
 * description: Get adn Set common data during app lifespan
 */

define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');
    //var msgBus = require('msgbus');
   //Backbone.LocalStorage = require('localstorage');
    var Entities = {};

    Entities.Store = Backbone.Model.extend({
       // localStorage: new Backbone.LocalStorage('Equifit'),

        defaults: {
            pageTitle: null,

            clientId: null,
            clientName: null,
            equifitId: null,
            equifitName: null,
            formName: null,
            formId: null,

            appointmentAt: null,
            isSigned: null,
            isValidated: null,

            forms: null
        },

        initialize: function () {
            //this.on('change', this.updateStorage);
            this.on('change', this.debug);
            this.on('change:pageTitle', this.updatePageTitle);
        },

        //updateStorage: function () {
        //    this.save();
        //},

        debug: function () {
            console.warn('STORE', this.toJSON());
        },

        updatePageTitle: function () {
            $('title').text(this.get('pageTitle'));
        }
    });

    //app.store = new Entities.Store();
  //  var store = new Entities.Store();

    //var store = new Entities.Store();
    //
    //var API = {
    //    setStore: function (options) {
    //        //app.store.set(options);
    //        store.save();
    //    },
    //
    //    getStore: function () {
    //        console.log('get store');
    //        //return store;
    //
    //        var deferred = $.Deferred();
    //
    //        store.fetch({
    //            success: deferred.resolve,
    //            error: deferred.reject
    //        });
    //
    //        return deferred.promise();
    //
    //
    //    }
    //};
    //
    //msgBus.commands.setHandler('store:set', function(options){
    //    console.log('set store with ', options);
    //    return API.setStore(options);
    //});
    //
    //msgBus.reqres.setHandler('store:get', function () {
    //    console.log('get store data');
    //    return API.getStore();
    //});


    // return instance
    module.exports = Entities.Store;
});
