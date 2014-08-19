define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgBus');
    var EquifitEntities = require('entities/equifits');
   // var EquifitEntity = require('entities/equifit');
    var EquifitView = require('views/equifit');
    var HeaderView = require('views/header');
    var BreadcrumbView = require('views/breadcrumb');
    var LoadingView = require('views/loading');
    var EquifitModule = {};
    var url;

    // create an instance of equifits collection.
    var equifitEntities = new EquifitEntities();
    //var equifitEntity = new EquifitEntity();

    EquifitModule.init = function (clientId, equifitId) {

        app.store.set({
            title: 'Forms',
            slug: 'forms',
            url: '/equifit/client/' + clientId + '/equifits/' + equifitId,
            clientId: clientId,
            equifitId: equifitId
        });

        // create loading view
        app.useLayout('layouts/main').setViews({
            '.main-container': new LoadingView({
                title: 'Loading Forms'
            })
        }).render();

        // Fetch data and replace loading view
        equifitEntities.fetch().then(
            function () {
                app.useLayout('layouts/main').setViews({
                    '.header': new HeaderView(),
                    '.breadcrumb-container': new BreadcrumbView(),
                    '.main-container': new EquifitView({
                        model: equifitEntities.get(equifitId)
                    })
                }).render();
                msgBus.trigger('equifit:title:update', app.store.get('title'));
            }
        );
    };

    EquifitModule.createNew = function (clientId) {

        //var promise = equifitEntity.addEquifit();
        //
        //promise.done(function (model) {
        //    console.log('model success', model);
        //    //msgBus.trigger('equifit:modal:create', model);
        //    url = '/equifit/client/' + model.get('clientId') + '/equifit/' + model.id;
        //    app.router.navigate(url, {trigger: true});
        //});
        //
        //promise.fail(function (model, jqXHR, textStatus) {
        //    // TODO create error page
        //    console.log('error:', model, jqXHR, textStatus);
        //});

        var promise = equifitEntities.addEquifit(clientId);

        promise.done(function (model, responce) {
            console.log('model success', model, responce);

            url = '/equifit/client/' + model.get('clientId') + '/equifit/' + model.id;
            app.router.navigate(url, { trigger: true});

            //EquifitModule.init(clientId, model.id )
        });

        promise.fail(function (model, jqXHR, textStatus) {
            // TODO create error page
            console.log('error:', model, jqXHR, textStatus);
            url = '/equifit/error';
            app.router.navigate(url, { trigger: true });
        });
    };

    EquifitModule.update = function (model) {
        var promise = model.updateEquifit(model);

        promise.done(function (model) {
            msgBus.trigger('equifit:modal:create', model);
        });

        promise.fail(function (model, jqXHR, textStatus) {
            // TODO create error page
            console.log('error:', model, jqXHR, textStatus);
        });
    };

    module.exports = EquifitModule;
});