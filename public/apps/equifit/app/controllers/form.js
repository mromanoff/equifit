define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var moment = require('moment');
    var msgBus = require('msgbus');
    require('entities/forms');
    var FormView = require('views/form');
    var HeaderView = require('views/header');
    var LoadingView = require('views/loading');
    var controller = {};

    controller.getForm = function () {
        /***
         * update store model
         */
        msgBus.commands.execute('store:set', {
            title: 'Form'
        });

        app.layout.setView('.main-container', new LoadingView());
        app.layout.render();

        var fetchingForm = msgBus.reqres.request('form:entity', app.store.get('formId'));
        $.when(fetchingForm).done(function (form) {
            /***
             * update store model
             */


            console.log('form ', form);

            msgBus.commands.execute('store:set', {
                title: form.get('title'),
                formName: form.get('title')
            });

            app.layout.setView('.header', new HeaderView());
            app.layout.setView('.main-container', new FormView({
                model: form
            }));
            app.layout.render();
        });

        $.when(fetchingForm).fail(function (model, jqXHR, textStatus) {
            console.log('error: form create failed', model, jqXHR, textStatus);
            var url = 'error';
            app.router.navigate(url, { trigger: true });
        });
    };

    controller.createForm = function (templateId) {
        console.warn('create new form', templateId);

        /***
         * update store model
         */
        msgBus.commands.execute('store:set', {
            title: 'Form'
        });

        app.layout.setView('.main-container', new LoadingView({
            title: 'Loading Form'
        }));
        app.layout.render();

        var createForm = msgBus.reqres.request('form:entity:create', templateId);
        $.when(createForm).done(function (form) {
            /***
             * update store model
             */
            msgBus.commands.execute('store:set', {
                title: form.get('title'),
                formName: form.get('title'),
                equifitName: 'Forms'
            });

            app.layout.setView('.header', new HeaderView());
            app.layout.setView('.main-container', new FormView({
                model: form
            }));
            app.layout.render();

            var url = 'client/' + app.store.get('clientId') + '/equifit/' + app.store.get('equifitId') + '/form/' + form.id;
            app.router.navigate(url);
        });

        $.when(createForm).fail(function (model, jqXHR, textStatus) {
            console.log('error: form create failed', model, jqXHR, textStatus);
            var url = 'error';
            app.router.navigate(url, { trigger: true });
        });
    };

    controller.updateForm = function (form) {

        app.layout.setView('.main-container', new LoadingView({
            title: 'Loading Form'
        }));
        app.layout.render();

        var updateForm = msgBus.reqres.request('form:entity:update', form);

        $.when(updateForm).done(function () {
            var updatedAt = '<small>updated at: ' + moment().format('dddd, MMMM Do YYYY, h:mm:ss a') + '</small>';

            msgBus.commands.execute('modal:simple:show',
                new Backbone.Model({
                    title: 'Success',
                    messages: ['Form updated!', updatedAt]
                }));

            app.layout.setView('.header', new HeaderView());
            app.layout.setView('.main-container', new FormView({
                model: form
            }));
            app.layout.render();
        });

        $.when(updateForm).fail(function (model, jqXHR, textStatus) {
            console.log('error: equifit create failed', model, jqXHR, textStatus);
            var url = 'error';
            app.router.navigate(url, { trigger: true });
        });
    };

    module.exports = controller;
});
