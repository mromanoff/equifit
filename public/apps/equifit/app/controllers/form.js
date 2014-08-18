define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgBus');
    var FormEntities = require('entities/forms');
    var FormView = require('views/form');
    var HeaderView = require('views/header');
    var BreadcrumbView = require('views/breadcrumb');
    var LoadingView = require('views/loading');
    var formModule = {};
    var url;

    // create an instance of forms collection.
    var formEntities = new FormEntities();

    formModule.init = function (clientId, equifitId, formId) {


        console.log('WWWwWWWW', clientId, equifitId, formId);


        app.store.set({
            title: 'Form',
            slug: 'form',
            url: '/equifit/client/' + clientId + '/equifits/' + equifitId + '/forms/' + formId,
            clientId: clientId,
            equifitId: equifitId,
            formId: formId
        });

        app.useLayout('layouts/main').setViews({
            '.main-container': new LoadingView({
                    title: 'Loading Form'
            })
        }).render();

        // Fetch data
        formEntities.fetch().then(
            function () {



                console.log('fetch', formEntities);


                app.useLayout('layouts/main').setViews({
                    '.header': new HeaderView(),
                    '.breadcrumb-container': new BreadcrumbView(),
                    '.main-container': new FormView({
                        model: formEntities.get(formId)
                    })
                }).render();

                msgBus.trigger('equifit:title:update', app.store.get('title'));
            }
        );
    };

    formModule.addNewForm = function () {
      console.log('add new form here');

        formEntities.create(null, {
            // waits for server to respond with 200
            // before adding newly created model to collection
            wait : true,
            success : function(model){
                console.log('success callback', model);
                url = '/equifit/client/' + app.store.get('clientId') + '/equifit/' + app.store.get('equifitId') + '/form/' + model.get('templateId');
                app.router.navigate(url, { trigger: true });
            },
            error : function(err) {
                console.log('ERROR: can\'t create new forms', err);

                url = '/equifit/error';
                app.router.navigate(url, { trigger: true });
            }
        });
    };

    module.exports = formModule;
});
