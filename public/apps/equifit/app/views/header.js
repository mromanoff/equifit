define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus =require('msgbus');
    require('entities/store');
    var Backbone = require('backbone');

    var HeaderViewModule;

    HeaderViewModule =  Backbone.View.extend({
        manage: true,
        tagName: 'h1',
        template: 'header',


        initialize: function () {
            //var storeEntities = msgBus.reqres.request('equifit:store:get');
            //console.log('store data', storeEntities);
            //
            //
            //$.when(storeEntities).done(function (store) {
            //    console.log('store fetched', store);
            //
            //    // if there is no existing Equifit. server response []
            //    // set clientName from the first model
            //    if(store !== 0) {
            //        // update store model
            //        console.log('store not undefined', store);
            //    }
            //});



        },

        serialize: function () {
            return app.store.toJSON();
            //var data = msgBus.reqres.request('equifit:store:get');

            //console.log(data);

            //return msgBus.reqres.request('equifit:store:get').toJSON();
        }
    });

    module.exports = HeaderViewModule;
});