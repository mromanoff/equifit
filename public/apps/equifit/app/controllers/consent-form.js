define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var ConsentFormView = require('views/consent-form');
    var HeaderView = require('views/header');
    var BreadcrumbView = require('views/breadcrumb');
    var ConsentFormModule = {};

    app.store.set({
        pageTitle: 'Consent Form',
        slug: 'consent-form'
    });

    ConsentFormModule.init = function (equifitId, formId) {
        app.useLayout('layouts/main').setViews({
            '.header': new HeaderView(),
            '.breadcrumb-container': new BreadcrumbView(),
            '.main-container': new ConsentFormView()
    }).render();
        $('title').html('Consent Form');
    };

    module.exports = ConsentFormModule;
});
