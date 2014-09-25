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
            isSigned: null,
            isValidated: null,
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
            // show loading view  while fetching data
            msgBus.commands.execute('loading:show', {message: 'Loading...'});  // you can pass message. it is optional

           // setTimeout(function () {
                collection.fetch({
                    success: function (data) {
                        defer.resolve(data);
                        msgBus.commands.execute('loading:hide');
                    },
                    error: function (model, jqXHR, textStatus) {
                        msgBus.commands.execute('loading:hide');
                        defer.reject(model, jqXHR, textStatus);
                    }
                });
           // }, 1000);
            return defer.promise();
        },

        createEquifitEntity: function () {
            var collection = new Entities.EquifitCollection();
            var defer = $.Deferred();

            // show loading view  while fetching data
            msgBus.commands.execute('loading:show');

           // setTimeout(function(){
            collection.create({clientId: app.store.get('clientId')}, {
                wait : true,
                success: function (data) {
                    msgBus.commands.execute('loading:hide');
                    defer.resolve(data);
                },
                error: function (model, jqXHR, textStatus) {
                    msgBus.commands.execute('loading:hide');
                    defer.reject(model, jqXHR, textStatus);
                }
            });
           // }, 1000);
            return defer.promise();
        },

        updateEquifitEntity: function (equifit) {
            var defer = $.Deferred();

            // show loading view  while fetching data
            msgBus.commands.execute('loading:show');

           // setTimeout(function(){
            equifit.save({}, {
                wait : true,
                success: function (data) {
                    msgBus.commands.execute('loading:hide');
                    defer.resolve(data);
                },
                error: function (model, jqXHR, textStatus) {
                    msgBus.commands.execute('loading:hide');
                    defer.reject(model, jqXHR, textStatus);
                }
            });
           // }, 2000);
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
