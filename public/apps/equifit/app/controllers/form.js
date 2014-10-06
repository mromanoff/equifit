define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var moment = require('moment');
    var msgBus = require('msgbus');
    var FormView = require('views/form');
    var HeaderView = require('views/header');
    var BreadCrumbView = require('views/breadcrumb');
    var controller = {};

    controller.getForm = function (formId) {
        require('entities/forms');
        var fetchingForm = msgBus.reqres.request('form:entity', formId);
        $.when(fetchingForm).done(function (form) {

            // update store model
            msgBus.commands.execute('store:set', {
                pageTitle: form.get('title')
            });

            app.layout.setView('.header', new HeaderView({
                model: new Backbone.Model({
                    pageTitle: form.get('title'),
                    updatedAt:  '{FIX THIS}' + form.get('updatedAt')
                })
            }));

            app.layout.setView('.navigation', new BreadCrumbView({
                model: new Backbone.Model({
                    breadCrumbId: 'form'
                })
            }));

            app.layout.setView('.main-container', new FormView({
                model: form
            }));
            app.layout.render();
        });

        $.when(fetchingForm).fail(function (model, jqXHR, textStatus) {
            msgBus.commands.execute('equifit:error', model, jqXHR, textStatus);
        });
    };

    controller.createForm = function (templateId) {
        var createForm = msgBus.reqres.request('form:entity:create', templateId);
        $.when(createForm).done(function (form) {
            msgBus.commands.execute('form:get', form.id);
            app.router.navigate('client/' + app.store.get('clientId') + '/equifit/' + app.store.get('equifitId') + '/form/' + form.id);
        });

        $.when(createForm).fail(function (model, jqXHR, textStatus) {
            msgBus.commands.execute('equifit:error', model, jqXHR, textStatus);
        });
    };

    controller.updateForm = function (form) {
        var updateForm = msgBus.reqres.request('form:entity:update', form);
        $.when(updateForm).done(function (form) {
            console.info('Form manualy updated:', form);
            //TODO
            // on server response. form should have an updatedAt attribute.
            // update UI last saved/modified
            // for now as a hack use client time
            // July 8, 2014
            var updatedAt = '<small>Saved on ' + moment().format('MMMM D, YYYY') + '</small>';

            msgBus.commands.execute('modal:confirmation:show',
                new Backbone.Model({
                    title: 'Success',
                    messages: ['Form updated!', updatedAt]
                }));

            msgBus.commands.execute('equifit:get', app.store.get('equifitId'));
            app.router.navigate('client/' + app.store.get('clientId') + '/equifit/' + app.store.get('equifitId'));

        });

        $.when(updateForm).fail(function (model, jqXHR, textStatus) {
            msgBus.commands.execute('equifit:error', model, jqXHR, textStatus);
        });
    };


    controller.autoSaveForm = function (form) {
        var updateForm = msgBus.reqres.request('form:entity:update', form);
        $.when(updateForm).done(function (form) {
            console.info('Form auto saved:', form);
            //TODO
            // on server response. form should have an updatedAt attribute.
            // update UI last saved/modified
            // for now as a hack use client time
            // July 8, 2014
            var updatedAt = 'saved ' + moment().format('h:mm:ss a');
            console.log('modified', updatedAt);

            $('.modified').text(updatedAt);


        });

        $.when(updateForm).fail(function (model, jqXHR, textStatus) {
            msgBus.commands.execute('equifit:error', model, jqXHR, textStatus);
        });
    };

    module.exports = controller;
});
