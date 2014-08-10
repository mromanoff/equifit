define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var EquifitEntities = require('entities/equifits');
    var EquifitView = require('views/equifits');
    var HeaderView = require('views/header');
    var BreadcrumbView = require('views/breadcrumb');
    var ActionView = require('views/action');

    var EquifitsModule = {};
    // create an instance of equifits collection.
    var equifitEntities = new EquifitEntities();

    app.store.set({
        pageTitle: 'Equifits',
        slug: 'equifit'
    });

    EquifitsModule.init = function () {
        // Fetch data
        equifitEntities.fetch().then(
            function () {
                app.useLayout('layouts/main').setViews({
                    '.header': new HeaderView(),
                    '.breadcrumb-container': new BreadcrumbView(),
                    '.action-container': new ActionView(),
                    '.main-container': new EquifitView({
                        collection: equifitEntities
                    })
                }).render();
                $('title').html('Equifit');
            }
        );
    };

    module.exports = EquifitsModule;
});