define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var EquifitEntities = require('entities/equifits');
    var EquifitView = require('views/equifits');
    var HeaderView = require('views/header');
    var BreadcrumbView = require('views/breadcrumb');
    var ActionView = require('views/action');
    var LoadingView = require('views/loading');
    var EquifitsModule = {};

    // create an instance of equifits collection.
    var equifitEntities = new EquifitEntities();

    EquifitsModule.init = function () {
        // update store model
        msgBus.trigger('equifit:store:update', {
            title: 'Equifits',
            //url: '/equifit/client/' + app.store.get('clientId'),
            slug: 'equifit'
        });

        app.useLayout('layouts/main').setViews({
            '.main-container': new LoadingView({
                title: 'Loading Equifits'
            })
        }).render();

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

                app.useLayout('layouts/main').setViews({
                    '.header': new HeaderView(),
                    '.breadcrumb-container': new BreadcrumbView(),
                    '.action-container': new ActionView(),
                    '.main-container': new EquifitView({
                        collection: equifitEntities
                    })
                }).render();

                msgBus.trigger('equifit:title:update', app.store.get('title'));
            }
        );
    };

    module.exports = EquifitsModule;
});