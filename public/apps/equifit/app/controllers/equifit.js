define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    require('entities/equifits');
    var EquifitView = require('views/equifit');
    var HeaderView = require('views/header');
    var LoadingView = require('views/loading');
    var controller = {};

    controller.getEquifit = function () {
        /***
         * update store model
         */
        msgBus.commands.execute('store:set', {
            title: 'Forms'
        });

        app.layout.setView('.main-container', new LoadingView({
            title: 'Loading Forms'
        }));
        app.layout.render();

        var fetchingEquifit = msgBus.reqres.request('equifit:entity', app.store.get('equifitId'));
        $.when(fetchingEquifit).done(function (equifit) {
            /***
             * update store model
             */
            msgBus.commands.execute('store:set', {
                clientName: equifit.get('clientName'),
                isSigned: equifit.get('isSigned'),
                forms: equifit.get('documents')
            });

            app.layout.setView('.header', new HeaderView());
            app.layout.setView('.main-container', new EquifitView({
                model: equifit
            }));
            app.layout.render();
        });
    };

    controller.createEquifit = function () {
        var createEquifit = msgBus.reqres.request('equifit:entity:create');
        $.when(createEquifit).done(function (equifit) {
            /***
             * update store model
             */
            msgBus.commands.execute('store:set', {
                clientName: equifit.get('clientName'),
                isSigned: equifit.get('isSigned'),
                forms: equifit.get('documents')
            });

            app.layout.setView('.header', new HeaderView());
            app.layout.setView('.main-container', new EquifitView({
                model: equifit
            }));
            app.layout.render();

            var url = 'client/' + app.store.get('clientId') + '/equifit/' + equifit.id;
            app.router.navigate(url);
        });

        $.when(createEquifit).fail(function (model, jqXHR, textStatus) {
            console.log('error: equifit create failed', model, jqXHR, textStatus);
            var url = 'error';
            app.router.navigate(url, { trigger: true });
        });
    };


    controller.updateEquifit = function (equifit) {

        console.warn('controller update equifit request', equifit);


        var updateEquifit = msgBus.reqres.request('equifit:entity:update', equifit);
        $.when(updateEquifit).done(function (equifit) {

            console.warn('controller update equifit response', equifit);

            msgBus.commands.execute('modal:show', equifit);




            /***
             * update store model
             */
            //msgBus.commands.execute('store:set', {
            //    clientName: equifit.get('clientName'),
            //    isSigned: equifit.get('isSigned'),
            //    forms: equifit.get('documents')
            //});
            //
            //app.layout.setView('.header', new HeaderView());
            //app.layout.setView('.main-container', new EquifitView({
            //    model: equifit
            //}));
            //app.layout.render();
            //
            //var url = 'client/' + app.store.get('clientId') + '/equifit/' + equifit.id;
            //app.router.navigate(url);
        });

        $.when(updateEquifit).fail(function (model, jqXHR, textStatus) {
            console.log('error: equifit create failed', model, jqXHR, textStatus);
            var url = 'error';
            app.router.navigate(url, { trigger: true });
        });
    };

    module.exports = controller;
});