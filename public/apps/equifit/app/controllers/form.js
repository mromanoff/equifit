define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var FormEntity = require('entities/form');
    var FormEntities = require('entities/forms');
    var FormView = require('views/form');
    var HeaderView = require('views/header');
    var BreadcrumbView = require('views/breadcrumb');
    var MessageView = require('views/message');
    var LoadingView = require('views/loading');
    var formModule = {};
    var url;

    // create an instance of form model and form collection.
    var formEntities = new FormEntities();
    var formEntity = new FormEntity();

    formModule.init = function () {

        /***
         * update store model
         */
        msgBus.trigger('equifit:store:update', {
            title: 'Form',
            slug: 'form'
        });

        app.layout.setView('.main-container', new LoadingView({
            title: 'Loading Forms'
        })).render();

        formEntity.fetch().then(
            function () {

                /***
                 * update store model
                 */
                msgBus.trigger('equifit:store:update', {
                    title: formEntity.get('title'),
                    formName: formEntity.get('title')
                });

                /***
                 * update page title
                 */
                msgBus.trigger('equifit:title:update', app.store.get('title'));

                app.layout.setView('.header', new HeaderView());
                app.layout.setView('.breadcrumb-container', new BreadcrumbView());
                if (!app.store.get('isSigned')) {
                    app.layout.setView('.message', new MessageView());
                }
                app.layout.setView('.main-container', new FormView({
                    model: formEntity
                }));
                app.layout.render();
            }
        );
    };

    formModule.createNew = function (templateId) {
        formEntities.create({templateId: templateId}, {
            // waits for server to respond with 200
            // before adding newly created model to collection
            wait: true,
            success: function (model) {
                console.log('success callback', model);
                url = 'client/' + app.store.get('clientId') + '/equifit/' + app.store.get('equifitId') + '/form/' + model.id;
                app.router.navigate(url, {trigger: true});
            },
            error: function (err) {
                console.log('ERROR: can\'t create new forms', err);

                url = 'error';
                app.router.navigate(url, {trigger: true});
            }
        });
    };

    formModule.update = function (model) {
        var promise = model.updateForm(model);

        promise.done(function (model) {
            console.log('Form updated', model);
        });

        promise.fail(function (model, jqXHR, textStatus) {
            // TODO create error page
            console.log('error:', model, jqXHR, textStatus);
        });
    };

    module.exports = formModule;
});
