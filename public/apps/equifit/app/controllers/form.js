define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    //var FormEntity = require('entities/form');
    require('entities/forms');

    var FormView = require('views/form');
    var HeaderView = require('views/header');
    var LoadingView = require('views/loading');
    var controller = {};
    var url;

    // create an instance of form model and form collection.
    //var formEntities = new FormEntities();
    //var formEntity = new FormEntity();

    controller.getForm = function () {
        /***
         * update store model
         */
        msgBus.commands.execute('store:set', {
            title: 'Form'
        });

        app.layout.setView('.main-container', new LoadingView({
            title: 'Loading Forms'
        }));
        app.layout.render();

        var fetchingForm = msgBus.reqres.request('form:entity', app.store.get('formId'));
        $.when(fetchingForm).done(function (form) {
            /***
             * update store model
             */
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
    };

    controller.createNew = function (templateId) {

        console.warn('create new form', templateId);

        formEntities.create({templateId: templateId}, {
            // waits for server to respond with 200
            // before adding newly created model to collection
            wait: true,
            success: function (model) {
                console.log('success callback', model);
                url = 'client/' + app.store.get('clientId') + '/equifit/' + app.store.get('equifitId') + '/form/' + model.id;
                app.router.navigate(url, {trigger: true});
            },
            error: function (model, response) {
                console.log('ERROR: can\'t create new forms', model, response);
                msgBus.trigger('equifit:error', response);
                app.router.navigate('error');
            }
        });
    };

    controller.update = function (model) {
        var promise = model.updateForm(model);

        promise.done(function (model) {
            console.log('Form updated', model);
        });

        promise.fail(function (model, jqXHR, textStatus) {
            // TODO create error page
            console.log('error:', model, jqXHR, textStatus);
        });
    };

    module.exports = controller;
});
