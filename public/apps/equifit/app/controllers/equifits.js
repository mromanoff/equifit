define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var EquifitEntities = require('entities/equifits');
    var EquifitView = require('views/equifits');
    var HeaderView = require('views/header');
    var LoadingView = require('views/loading');
    var EquifitsModule = {};

    // create an instance of equifits collection.
    var equifitEntities = new EquifitEntities();

    EquifitsModule.init = function () {
        // update store model
        msgBus.trigger('equifit:store:update', {
            title: 'Equifits'
        });

        app.layout.setView('.main-container', new LoadingView({
            title: 'Loading Forms'
        })).render();

        // Fetch data and replace loading view
        equifitEntities.fetch().then(
            function () {
                // if there is no existing Equifit. server response []
                // set clientName from the first model
                if(equifitEntities.length !== 0) {
                    // update store model
                    msgBus.trigger('equifit:store:update', {
                        clientName: equifitEntities.at(0).get('clientName')
                    });
                }

                app.layout.setView('.header', new HeaderView());
                app.layout.setView('.main-container', new EquifitView({
                    collection: equifitEntities
                }));
                app.layout.render();
            }
        );
    };

    module.exports = EquifitsModule;
});