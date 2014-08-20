define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var FormEntities = require('entities/forms');
    var FormView = require('views/form');
    var HeaderView = require('views/header');
    var BreadcrumbView = require('views/breadcrumb');
    var LoadingView = require('views/loading');
    var formModule = {};
    var url;

    // create an instance of forms collection.
    var formEntities = new FormEntities();

    formModule.init = function () {

        // update store model
        msgBus.trigger('equifit:store:update', {
            title: 'Form',
            slug: 'form',
            url: '/equifit/client/' + app.store.get('clientId') + '/equifits/' + app.store.get('equifitId') + '/forms/' + app.store.get('formId')
        });

        app.useLayout('layouts/main').setViews({
            '.main-container': new LoadingView({
                    title: 'Loading Form'
            })
        }).render();

        // Fetch data
        formEntities.fetch().then(
            function () {
                app.useLayout('layouts/main').setViews({
                    '.header': new HeaderView(),
                    '.breadcrumb-container': new BreadcrumbView(),
                    '.main-container': new FormView({
                        model: formEntities.get(app.store.get('formId'))
                    })
                }).render();

                msgBus.trigger('equifit:title:update', app.store.get('title'));
            }
        );
    };

    formModule.createNew = function () {
      console.log('add new form here');

        formEntities.create(null, {
            // waits for server to respond with 200
            // before adding newly created model to collection
            wait : true,
            success : function(model){
                console.log('success callback', model);
                url = '/equifit/client/' + app.store.get('clientId') + '/equifit/' + app.store.get('equifitId') + '/form/' + model.get('_id');
                app.router.navigate(url, { trigger: true });
            },
            error : function(err) {
                console.log('ERROR: can\'t create new forms', err);

                url = '/equifit/error';
                app.router.navigate(url, { trigger: true });
            }
        });
    };

    formModule.update = function (model) {
        var promise = model.updateForm(model);

        promise.done(function (model) {
            //msgBus.trigger('equifit:modal:create', model);
            console.log('Form updated', model);
        });

        promise.fail(function (model, jqXHR, textStatus) {
            // TODO create error page
            console.log('error:', model, jqXHR, textStatus);
        });
    };

    module.exports = formModule;
});
