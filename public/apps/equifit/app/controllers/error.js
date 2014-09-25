define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var ErrorView = require('views/error');
    var HeaderView = require('views/header');
    var errorModule = {};

    errorModule.init = function (model, jqXHR) {
        /***
         * update url
         */
        app.router.navigate('error');

        /***
         * update store model
         */
        msgBus.commands.execute('store:set', {
            title: 'Error'
        });

        app.layout.setView('.header', new HeaderView());
        app.layout.setView('.main-container', new ErrorView ({
            model: new Backbone.Model(jqXHR)
        }));
        app.layout.render();
    };

    module.exports = errorModule;
});