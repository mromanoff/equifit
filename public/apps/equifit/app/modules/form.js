/**
 * Created by mromanoff on 7/24/2014.
 */

define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var FormEntity = require('./entities/form');
    var FormView = require('./views/form');
    var HeaderView = require('./views/header');
    var BreadcrumbView = require('./views/breadcrumb');

    var Form = {};

    /// create an instance of forms collection.
    var formEntity = new FormEntity();

    app.store.set({
        pageTitle: 'Form', //app.store.get('formName'),
        slug: 'form'
    });

    Form.init = function (equifitId, formId) {

        formEntity.url = function () {
            return '/apps/equifit/api/form.json';
            //return '/equifit/api/members/' + app.store.get('memberId') + '/equifits/' + equifitId + '/documents/' + formId;
        };

        // Fetch data
        formEntity.fetch().then(
            function () {
                app.useLayout('layouts/main').setViews({
                    '.header': new HeaderView(),
                    '.breadcrumb-container': new BreadcrumbView(),
                    '.main-container': new FormView({
                        model: formEntity
                    })
                }).render();
                $('title').html('Equifit');
            }
        );
    };

    module.exports = Form;
});
