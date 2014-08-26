//define(function (require, exports, module) {
//    'use strict';
//
//    var app = require('app');
//    var Backbone = require('backbone');
//    var EquifitEntity = require('entities/equifit');
//    var EquifitEntities;
//
//    EquifitEntities = Backbone.Collection.extend({
//        model: EquifitEntity,
//
//        url: function () {
//            //return '/apps/equifit/api/equifits.json';
//            return '/equifit/api/clients/' + app.store.get('clientId') + '/equifits/';
//        },
//
//        addEquifit: function () {
//            var deferred = $.Deferred();
//
//           // setTimeout(function () {
//            this.create({clientId: app.store.get('clientId')}, {
//                wait : true,
//                success: deferred.resolve,
//                error: deferred.reject
//            });
//           // }, 2000);
//            return deferred.promise();
//        }
//
//    });
//
//    module.exports = EquifitEntities;
//});


define(function (require) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var Backbone = require('backbone');
    var EquifitEntity = require('entities/equifit');


    var EquifitEntities = Backbone.Collection.extend({
        model: EquifitEntity

        //url: function () {
        //    return '/equifit/api/clients/' + app.store.get('clientId') + '/equifits/';
        //},

        //addEquifit: function () {
        //    var deferred = $.Deferred();
        //
        //   // setTimeout(function () {
        //    this.create({clientId: app.store.get('clientId')}, {
        //        wait : true,
        //        success: deferred.resolve,
        //        error: deferred.reject
        //    });
        //   // }, 2000);
        //    return deferred.promise();
        //}

    });


    var API = {
        /**
         * @name getEquifits
         * @function
         * @returns {object} promise object
         */
        getEquifits: function () {
            var deferred = $.Deferred();

            console.log('api get equifits');

            var equifits = new EquifitEntities();

            //App.layout.content.show(loadingView);

            equifits.url = function () {
                return '/equifit/api/clients/' + app.store.get('clientId') + '/equifits/';
            };

            //setTimeout(function () {
                equifits.fetch({
                    success: deferred.resolve,
                    error: deferred.reject
                });

           // }, 2000);
            return deferred.promise();
        }
    };

    //msgBus.on('entities:get:equifits', function () {
    //    console.log('get equifits');
    //    return API.getEquifits();
    //});

    return API;

});
