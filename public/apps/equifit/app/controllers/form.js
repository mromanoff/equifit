define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var FormEntities = require('entities/forms');
    var FormView = require('views/form');
    var HeaderView = require('views/header');
    var BreadcrumbView = require('views/breadcrumb');
    var LoadingView = require('views/loading');

    var FormModule = {};

    /// create an instance of forms collection.
    var formEntities = new FormEntities();

    app.store.set({
        slug: 'form'
    });

    FormModule.init = function (equifitId, formId) {

        app.useLayout('layouts/main').setViews({
            '.main-container': new LoadingView()
        }).render();

        // Fetch data
        formEntities.fetch().then(
            function () {
                app.useLayout('layouts/main').setViews({
                    '.header': new HeaderView(),
                    '.breadcrumb-container': new BreadcrumbView(),
                    '.main-container': new FormView({
                        model: formEntities.get(formId)
                    })
                }).render();
                $('title').html('Equifit');
            }
        );
    };

    module.exports = FormModule;
});
