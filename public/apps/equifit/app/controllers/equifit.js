define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var EquifitView = require('views/equifit');
    var moment = require('moment');
    var HeaderView = require('views/header');
    var controller = {};

    controller.getEquifit = function (equifitId) {
        require('entities/equifits');
        var fetchingEquifits = msgBus.reqres.request('equifit:entities');

        $.when(fetchingEquifits).then(function (equifits) {
            var equifit = equifits.get(equifitId);
            // update store model
            msgBus.commands.execute('store:set', {
                clientId: equifit.get('clientId'),
                clientName: equifit.get('clientName'),
                appointmentAt: equifit.get('appointmentAt'),
                equifitId: equifit.get('_id'),
                equifitName: (moment(equifit.get('updatedAt'))).isValid() ? moment(equifit.get('updatedAt')).format('MMMM D, YYYY') : 'equifit',
                isSigned: equifit.get('isSigned'),
                documents: equifit.get('documents'),
                updatedAt: equifit.get('updatedAt')
            });

            app.layout.setView('.header', new HeaderView({
                model: new Backbone.Model({
                    pageTitle: 'Forms',
                    updatedAt: equifit.get('updatedAt')
                })
            }));
            app.layout.setView('.main-container', new EquifitView({
                model: equifit
            }));
            app.layout.render();
        });

        $.when(fetchingEquifits).fail(function (model, jqXHR, textStatus) {
            msgBus.commands.execute('equifit:error', model, jqXHR, textStatus);
        });
    };

    controller.createEquifit = function () {
        var createEquifit = msgBus.reqres.request('equifit:entity:create');
        $.when(createEquifit).then(function (equifit) {
            msgBus.commands.execute('equifit:get', equifit.id);
            app.router.navigate('client/' + app.store.get('clientId') + '/equifit/' + equifit.id);
        });

        $.when(createEquifit).fail(function (model, jqXHR, textStatus) {
            msgBus.commands.execute('equifit:error', model, jqXHR, textStatus);
        });
    };

    controller.updateEquifit = function (equifit) {
        var updateEquifit = msgBus.reqres.request('equifit:entity:update', equifit);
        $.when(updateEquifit).done(function (equifit) {
            msgBus.commands.execute('modal:prompt:show', equifit);
        });

        $.when(updateEquifit).fail(function (model, jqXHR, textStatus) {
            msgBus.commands.execute('equifit:error', model, jqXHR, textStatus);
        });
    };

    module.exports = controller;
});
