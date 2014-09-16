define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var EquifitView = require('views/equifits');
    var HeaderView = require('views/header');
    var controller = {};


    controller.getEquifits = function (clientId) {
        // update store model
        msgBus.commands.execute('store:set', {
            pageTitle: 'Equifits'
        });

        require('entities/equifits');
        var fetchingEquifits = msgBus.reqres.request('equifit:entities', clientId);

        $.when(fetchingEquifits).done(function (equifits) {
            // if there is no existing Equifit. server response []
            // set clientName from the first model
           // if (equifits.length !== 0) {
                // update store model
            msgBus.commands.execute('store:set', {
                clientName: equifits.at(0).get('clientName'),
                clientId: equifits.at(0).get('clientId')
            });
           // }
            app.layout.setView('.header', new HeaderView());
            app.layout.setView('.main-container', new EquifitView({
                collection: equifits
            }));
            app.layout.render();
        });

        $.when(fetchingEquifits).fail(function (model, jqXHR, textStatus) {
            console.error('error: equifit fetch failed:', model, jqXHR, textStatus);
            msgBus.commands.setHandler('equifit:error', jqXHR);
            app.router.navigate('error');
        });
    };

    module.exports = controller;
});