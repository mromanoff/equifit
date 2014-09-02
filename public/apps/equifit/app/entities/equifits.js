define(function (require) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var msgBus = require('msgbus');
    var Entities = {};

    Entities.Equifit = Backbone.Model.extend({
        idAttribute: '_id',
        defaults: {
            appointmentAt: null,
            updatedAt: null,
            trainerName: null,
            trainerFacility: null,
            clientId: null,
            clientName: null,
            isSigned: false,
            isValidated: false,
            documents: null
        },
        urlRoot: function () {
            return '/equifit/api/clients/' + app.store.get('clientId') + '/equifits/';
        }
    });

    Entities.EquifitCollection = Backbone.Collection.extend({
        model: Entities.Equifit,
        //comparator: '',
        url: function () {
            return '/equifit/api/clients/' + app.store.get('clientId') + '/equifits/';
        }
    });

    var API = {
        getEquifitEntities: function () {
            var collection = new Entities.EquifitCollection();
            var defer = $.Deferred();

           // setTimeout(function () {
                collection.fetch({
                    success: function (data) {
                        defer.resolve(data);
                    },
                    error: function (data) {
                        defer.resolve(data);
                    }
                });
           // }, 2000);
            return defer.promise();
        },

        getEquifitEntity: function (equifitId) {
            var model = new Entities.Equifit({_id: equifitId});
            var defer = $.Deferred();

         //   setTimeout(function(){
            model.fetch({
                success: function (data) {
                    defer.resolve(data);
                },
                error: function (data) {
                    defer.resolve(undefined);
                }
            });
        //    }, 2000);
            return defer.promise();
        },

        createEquifitEntity: function () {
            var collection = new Entities.EquifitCollection();
            var defer = $.Deferred();

            //setTimeout(function(){
            collection.create({clientId: app.store.get('clientId')}, {
                wait : true,
                success: function (data) {
                    defer.resolve(data);
                },
                error: function (data) {
                    defer.reject(data);
                }
            });
            //}, 2000);
            return defer.promise();
        },

        updateEquifitEntity: function (equifit) {
            var model = new Entities.Equifit({_id: equifit.id});
            var defer = $.Deferred();

            //setTimeout(function(){
            model.save({}, {
                wait : true,
                success: function (data) {
                    defer.resolve(data);
                },
                error: function (data) {
                    defer.reject(data);
                }
            });
            //}, 2000);
            return defer.promise();
        }
    };

    msgBus.reqres.setHandler('equifit:entities', function () {
        return API.getEquifitEntities();
    });

    msgBus.reqres.setHandler('equifit:entity', function (id) {
        return API.getEquifitEntity(id);
    });

    msgBus.reqres.setHandler('equifit:entity:create', function () {
        return API.createEquifitEntity();
    });

    msgBus.reqres.setHandler('equifit:entity:update', function (equifit) {
        return API.updateEquifitEntity(equifit);
    });

});
