define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var moment = require('moment');
    var msgBus = require('msgbus');
    var FormView = require('views/form');
    var HeaderView = require('views/header');
    var controller = {};

    controller.getForm = function (formId) {

        require('entities/forms');
        var fetchingForm = msgBus.reqres.request('form:entity', formId);
        $.when(fetchingForm).done(function (form) {
            /***
             * update store model
             */
            msgBus.commands.execute('store:set', {
                pageTitle: form.get('title'),
                formName: form.get('title')
            });

            app.layout.setView('.header', new HeaderView());
            app.layout.setView('.main-container', new FormView({
                model: form
            }));
            app.layout.render();
        });

        $.when(fetchingForm).fail(function (model, jqXHR, textStatus) {
            msgBus.commands.setHandler('equifit:error', jqXHR);
            app.router.navigate('error');
        });
    };

    controller.createForm = function (templateId) {
        var createForm = msgBus.reqres.request('form:entity:create', templateId);
        $.when(createForm).done(function (form) {
            /***
             * update store model
             */
            msgBus.commands.execute('store:set', {
                pageTitle: form.get('title'),
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
            msgBus.commands.setHandler('equifit:error', jqXHR);
            app.router.navigate('error');
        });
    };

    controller.updateForm = function (form) {
        var updateForm = msgBus.reqres.request('form:entity:update', form);

        $.when(updateForm).done(function () {
            var updatedAt = '<small>updated at: ' + moment().format('dddd, MMMM Do YYYY, h:mm:ss a') + '</small>';


            console.log('form updated', form);

            // update equifit isSigned to true
            ////msgBus.trigger('equifit:equifit:update', { isSigned: true});

            // only if templateType === 'InformedConsent' redirect to Equifit Page
            //if(_.isEqual(this.model.get('templateType'), 'InformedConsent')) {
            //    var url = 'client/' + app.store.get('clientId') + '/equifit/' + app.store.get('equifitId');
            //
            //    msgBus.commands.execute('equifit:get', app.store.get('equifitId'));
            //    app.router.navigate(url);
            //}



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
            msgBus.commands.setHandler('equifit:error', jqXHR);
            app.router.navigate('error');
        });
    };

    module.exports = controller;
});
