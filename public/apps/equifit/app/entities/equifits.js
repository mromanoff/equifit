define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var EquifitEntity = require('entities/equifit');
    var EquifitEntities;

    EquifitEntities = Backbone.Collection.extend({
        model: EquifitEntity,

        url: function () {
            //return '/apps/equifit/api/equifits.json';
            return '/equifit/api/clients/' + app.store.get('clientId') + '/equifits/';
        },

        addEquifit: function () {
            var deferred = $.Deferred();

           // setTimeout(function () {
            this.create({clientId: app.store.get('clientId')}, {
                wait : true,
                success: deferred.resolve,
                error: deferred.reject
            });
           // }, 2000);
            return deferred.promise();
        }

    });

    module.exports = EquifitEntities;
});
