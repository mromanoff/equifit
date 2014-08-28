define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var EquifitEntities = require('entities/equifits');
    var EquifitView = require('views/equifit');
    var HeaderView = require('views/header');
    var LoadingView = require('views/loading');
    var equifitModule = {};
    var url;

    // create an instance of equifits collection.
    var equifitEntities = new EquifitEntities();

    equifitModule.init = function () {

        /***
         * update store model
         */
        msgBus.trigger('equifit:store:update', {
            title: 'Forms'
        });

        app.layout.setView('.main-container', new LoadingView({
            title: 'Loading Forms'
        })).render();

        /***
         * Fetch data and replace loading view
         */
        equifitEntities.fetch().then(
            function () {
                var equifitEntety = equifitEntities.get(app.store.get('equifitId'));

                console.warn('equifitEntety', equifitEntety);

                /***
                 * update store model
                 */
                msgBus.trigger('equifit:store:update', {
                    clientName: equifitEntety.get('clientName'),
                    isSigned: equifitEntety.get('isSigned'),
                    forms: equifitEntety.get('documents')
                });

                app.layout.setView('.header', new HeaderView());
                app.layout.setView('.main-container', new EquifitView({
                    model: equifitEntety
                }));
                app.layout.render();
            }
        );
    };

    equifitModule.createNew = function () {
        var promise = equifitEntities.addEquifit();

        promise.done(function (model) {
            url = 'client/' + app.store.get('clientId') + '/equifit/' + model.id;
            app.router.navigate(url, { trigger: true});
        });

        promise.fail(function (model, jqXHR, textStatus) {
            // TODO create error page
            console.log('error:', model, jqXHR, textStatus);
            url = 'error';
            app.router.navigate(url, { trigger: true });
        });
    };

    equifitModule.update = function (model) {
        var promise = model.updateEquifit(model);

        promise.done(function (model) {
            msgBus.trigger('equifit:modal:create', model);
        });

        promise.fail(function (model, jqXHR, textStatus) {
            // TODO create error page
            console.log('error:', model, jqXHR, textStatus);
        });
    };

    module.exports = equifitModule;
});