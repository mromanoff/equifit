/**
 * Store Module
 * description: Get adn Set common data during app lifespan
 */

define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    Backbone.LocalStorage = require('localstorage');
    //var msgBus = require('msgbus');
    var Entities = {};

    Entities.Store = Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage('Equifit'),

        defaults: {
            title: null,
            clientId: null,
            clientName: null,
            appointmentAt: null,
            isSigned: null,
            isValidated: null,
            equifitName: null,
            equifitId: null,
            formName: null,
            formId: null,
            forms: null
        },

        initialize: function () {
            this.on('change', this.updateStorage);
            this.on('change:title', this.updatePageTitle);
        },

        updateStorage: function () {
            this.save();
        },

        updatePageTitle: function () {
            $('title').text(this.get('title'));
        }
    });

    //app.store = new Entities.Store();
  //  var store = new Entities.Store();


    //var API = {
    //    setStore: function (options) {
    //        //app.store.set(options);
    //    },
    //
    //    getStore: function () {
    //        console.log('get store');
    //        //return store;
    //
    //        var store = new Entities.Store();
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
    //msgBus.reqres.setHandler('equifit:store:get', function () {
    //    console.log('get store data');
    //    return API.getStore();
    //});


    // return instance
    module.exports = Entities.Store;
});
