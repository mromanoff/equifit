define(function (require) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var msgBus = require('msgbus');
    var LoadingView = require('views/loading');
    var Entities = {};

    var loadingView = function () {
        app.layout.setView('.main-container', new LoadingView());
        app.layout.render();
    };

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

            // show spinner while fetching data
            loadingView();

           // setTimeout(function () {
                collection.fetch({
                    success: function (data) {
                        defer.resolve(data);
                    },
                    error: function (data) {
                        defer.resolve(data);
                    }
                });
           // }, 1000);
            return defer.promise();
        },

        createEquifitEntity: function () {
            var collection = new Entities.EquifitCollection();
            var defer = $.Deferred();

            // show spinner while fetching data
            loadingView();

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
            //}, 1000);
            return defer.promise();
        },

        updateEquifitEntity: function (equifit) {
            var model = new Entities.Equifit({_id: equifit.id});
            var defer = $.Deferred();

            // show spinner while fetching data
            loadingView();

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

    msgBus.reqres.setHandler('equifit:entity:create', function () {
        return API.createEquifitEntity();
    });

    msgBus.reqres.setHandler('equifit:entity:update', function (equifit) {
        return API.updateEquifitEntity(equifit);
    });
});
