define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    require('entities/equifits');
    var EquifitView = require('views/equifits');
    var HeaderView = require('views/header');
    var LoadingView = require('views/loading');
    var controller = {};

    controller.getEquifits = function () {
        // update store model
        msgBus.commands.execute('store:set', {
            title: 'Equifits'
        });

        app.layout.setView('.main-container', new LoadingView({
            title: 'Loading Equifits'
        }));
        app.layout.render();

        var fetchingEquifits = msgBus.reqres.request('equifit:entities');
        $.when(fetchingEquifits).done(function (equifits) {

            // if there is no existing Equifit. server response []
            // set clientName from the first model
            if(equifits.length !== 0) {
                // update store model
                msgBus.commands.execute('store:set', {
                    clientName: equifits.at(0).get('clientName')
                });
            }

            app.layout.setView('.header', new HeaderView());
            app.layout.setView('.main-container', new EquifitView({
                collection: equifits
            }));
            app.layout.render();
        });
    };

    module.exports = controller;
});