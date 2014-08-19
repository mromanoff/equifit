define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var EquifitEntity;

    EquifitEntity = Backbone.Model.extend({
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

        //url: function () {
        //    return '/equifit/api/clients/' + app.store.get('clientId') + '/equifits/';
        //},

        updateEquifit: function (model) {
            var deferred = $.Deferred();

            //setTimeout(function () {
            model.save({}, {
                success: deferred.resolve,
                error: deferred.reject
            });
            //}, 2000);
            return deferred.promise();
        },

        //addEquifit: function () {
        //    var deferred = $.Deferred();
        //
        //    //setTimeout(function () {
        //    this.save({}, {
        //        success: deferred.resolve,
        //        error: deferred.reject
        //    });
        //    //}, 2000);
        //    return deferred.promise();
        //}
    });

    module.exports = EquifitEntity;
});
