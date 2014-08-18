define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgBus');
    var FormEntities = require('entities/forms');
    var FormView = require('views/form');
    var HeaderView = require('views/header');
    var BreadcrumbView = require('views/breadcrumb');
    var LoadingView = require('views/loading');
    var FormModule = {};

    // create an instance of forms collection.
    var formEntities = new FormEntities();

    FormModule.init = function (clientId, equifitId, formId) {

        app.store.set({
            title: 'Form',
            slug: 'form',
            url: '/equifit/client/' + clientId + '/equifits/' + equifitId + '/forms/' + formId,
            clientId: clientId,
            equifitId: equifitId,
            formId: formId
        });

        app.useLayout('layouts/main').setViews({
            '.main-container': new LoadingView({
                    title: 'Loading Form'
            })
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

                msgBus.trigger('update:title', app.store.get('title'));
            }
        );
    };

    module.exports = FormModule;
});
