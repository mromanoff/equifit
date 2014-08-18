/*
define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgBus');
    var FormsEntities = require('entities/forms');
    var FormsView = require('views/forms');
    var HeaderView = require('views/header');
    var BreadcrumbView = require('views/breadcrumb');
    var LoadingView = require('views/loading');
    var FormsModule = {};

    // create an instance of forms collection.
    var formsEntities = new FormsEntities();

    FormsModule.init = function () {

        app.store.set({
            title: 'Forms',
            slug: 'forms'
        });

        // create loading view
        app.useLayout('layouts/main').setViews({
            '.main-container': new LoadingView({
                title: 'Loading Forms'
            })
        }).render();

        // Fetch data and replace loading view
        formsEntities.fetch().then(
            function () {
                app.useLayout('layouts/main').setViews({
                    '.header': new HeaderView(),
                    '.breadcrumb-container': new BreadcrumbView(),
                    '.main-container': new FormsView({
                        collection: formsEntities
                    })
                }).render();

                msgBus.trigger('update:title', app.store.get('title'));
            }
        );
    };

    module.exports = FormsModule;
});*/
