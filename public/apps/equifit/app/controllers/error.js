define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var ErrorView = require('views/error');
    var HeaderView = require('views/header');
    var BreadcrumbView = require('views/breadcrumb');
    var errorModule = {};

    errorModule.init = function () {

        // update store model
        msgBus.trigger('equifit:store:update', {
            title: 'Error',
            slug: 'error'
        });

        app.useLayout('layouts/main').setViews({
            '.header': new HeaderView(),
            '.breadcrumb-container': new BreadcrumbView(),
            '.main-container': new ErrorView()
        }).render();

        msgBus.trigger('equifit:title:update', app.store.get('title'));

    };

    module.exports = errorModule;
});