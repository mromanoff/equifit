define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var EquifitView = require('views/equifit');
    var moment = require('moment');
    var HeaderView = require('views/header');
    var controller = {};

    controller.getEquifit = function (equifitId) {
        /***
         * update store model
         */
        msgBus.commands.execute('store:set', {
            pageTitle: 'Forms'
        });

        require('entities/equifits');
        var fetchingEquifits = msgBus.reqres.request('equifit:entities');

        $.when(fetchingEquifits).done(function (equifits) {
            var equifit = equifits.get(equifitId);

            console.log('equifit', equifit);

            // update store model
            msgBus.commands.execute('store:set', {
                clientId: equifit.get('clientId'),
                clientName: equifit.get('clientName'),
                appointmentAt: equifit.get('appointmentAt'),
                equifitId: equifit.get('_id'),
                equifitName: moment(equifit.get('appointmentAt')).format('MMMM D, YYYY') || 'Equifit',
                isSigned: equifit.get('isSigned'),
                forms: equifit.get('documents')
            });

            app.layout.setView('.header', new HeaderView());
            app.layout.setView('.main-container', new EquifitView({
                model: equifit
            }));

            app.layout.render();
        });

        $.when(fetchingEquifits).fail(function (model, jqXHR, textStatus) {
            console.log('error: get equifit failed', model, jqXHR, textStatus);
            msgBus.commands.setHandler('equifit:error', jqXHR);
            app.router.navigate('error');
        });
    };

    controller.createEquifit = function () {
        /***
         * update store model
         */
        msgBus.commands.execute('store:set', {
            title: 'Forms'
        });

        var createEquifit = msgBus.reqres.request('equifit:entity:create');
        $.when(createEquifit).done(function (equifit) {
            /***
             * update store model
             */
            msgBus.commands.execute('store:set', {
                clientId: equifit.get('clientId'),
                clientName: equifit.get('clientName'),
                appointmentAt: equifit.get('appointmentAt'),
                equifitId: equifit.get('_id'),
                equifitName: moment(equifit.get('appointmentAt')).format('MMMM D, YYYY') || 'Equifit',
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
            msgBus.commands.setHandler('equifit:error', jqXHR);
            app.router.navigate('error');
        });
    };

    controller.updateEquifit = function (equifit) {
        var updateEquifit = msgBus.reqres.request('equifit:entity:update', equifit);
        $.when(updateEquifit).done(function (equifit) {
            msgBus.commands.execute('modal:show', equifit);
        });

        $.when(updateEquifit).fail(function (model, jqXHR, textStatus) {
            console.log('error: equifit create failed', model, jqXHR, textStatus);
            var url = 'error';
            app.router.navigate(url, {trigger: true});
        });
    };

    module.exports = controller;
});