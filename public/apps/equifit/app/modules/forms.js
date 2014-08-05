define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var FormsEntities = require('./entities/forms');
    var FormsView = require('./views/forms');
    var HeaderView = require('./views/header');
    var BreadcrumbView = require('./views/breadcrumb');

    var Forms = {};

    // create an instance of forms collection.
    var formsEntities = new FormsEntities();

    Forms.init = function () {
        // Fetch data
        formsEntities.fetch().then(
            function () {
                app.useLayout('layouts/main').setViews({
                    '.header': new HeaderView({
                        model: new Backbone.Model({ pageTitle: 'Equifits Forms'})
                    }),
                    '.breadcrumb-container': new BreadcrumbView(),
                    '.main-container': new FormsView({
                        collection: formsEntities
                    })
                }).render();
                $('title').html('Equifit');
            }
        );
    };

    module.exports = Forms;
});