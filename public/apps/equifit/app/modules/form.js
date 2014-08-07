/**
 * Created by mromanoff on 7/24/2014.
 */

define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var FormEntities = require('./entities/forms');
    var FormView = require('./views/form');
    var HeaderView = require('./views/header');
    var BreadcrumbView = require('./views/breadcrumb');

    var Form = {};

    /// create an instance of forms collection.
    var formEntities = new FormEntities();

    app.store.set({
        pageTitle: 'Form', //app.store.get('formName'),
        slug: 'form'
    });

    Form.init = function (equifitId, formId) {
        // Fetch data
        formEntities.fetch().then(
            function () {
                app.useLayout('layouts/main').setViews({
                    '.header': new HeaderView(),
                    '.breadcrumb-container': new BreadcrumbView(),
                    '.main-container': new FormView({
                        model: formEntities.get(formId)
                    })
                }).render();
                $('title').html('Equifit');
            }
        );
    };

    module.exports = Form;
});
