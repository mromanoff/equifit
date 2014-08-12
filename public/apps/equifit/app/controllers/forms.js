define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var FormsEntities = require('entities/forms');
    var FormsView = require('views/forms');
    var HeaderView = require('views/header');
    var BreadcrumbView = require('views/breadcrumb');
    var LoadingView = require('views/loading');

    var FormsModule = {};

    // create an instance of forms collection.
    var formsEntities = new FormsEntities();

    app.store.set({
        pageTitle: 'Equifits Forms',
        slug: 'forms'
    });

    FormsModule.init = function () {

        app.useLayout('layouts/main').setViews({
            '.main-container': new LoadingView()
        }).render();

        // Fetch data
        formsEntities.fetch().then(
            function () {
                app.useLayout('layouts/main').setViews({
                    '.header': new HeaderView(),
                    '.breadcrumb-container': new BreadcrumbView(),
                    '.main-container': new FormsView({
                        collection: formsEntities
                    })
                }).render();
                $('title').html('Equifit');
            }
        );
    };

    module.exports = FormsModule;
});