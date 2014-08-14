define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgBus');
    var EquifitEntities = require('entities/equifits');
    var EquifitView = require('views/equifits');
    var HeaderView = require('views/header');
    var BreadcrumbView = require('views/breadcrumb');
    var ActionView = require('views/action');
    var LoadingView = require('views/loading');
    var EquifitsModule = {};

    // create an instance of equifits collection.
    var equifitEntities = new EquifitEntities();

    EquifitsModule.init = function (memberId) {

        app.store.set({
            title: 'Equifits',
            url: '/equifit/member/' + memberId,
            slug: 'equifit',
            memberId: memberId
        });

        app.useLayout('layouts/main').setViews({
            '.main-container': new LoadingView({
                title: 'Loading Equifits'
            })
        }).render();

        // Fetch data and replace loading view
        equifitEntities.fetch().then(
            function () {
                // update Store with member name
                app.store.set({
                    memberName: equifitEntities.at(1).get('memberName')
                });

                app.useLayout('layouts/main').setViews({
                    '.header': new HeaderView(),
                    '.breadcrumb-container': new BreadcrumbView(),
                    '.action-container': new ActionView(),
                    '.main-container': new EquifitView({
                        collection: equifitEntities
                    })
                }).render();

                msgBus.trigger('app:update:title', app.store.get('title'));
            }
        );
    };

    module.exports = EquifitsModule;
});