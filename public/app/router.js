define(function (require, exports, module) {
    "use strict";

    // External dependencies.
    var app = require('./app');
    var Backbone = require("backbone");

    // Defining the application router.
    var Router = Backbone.Router.extend({
        routes: {
            "": "index",
            'equifit(/)': 'equifit',
            'equifit/create(/)': 'equifitCreate',
            'equifit/create/forms/:id': 'equifitCreate',
            'equifit/edit/:id': 'equifitEdit',
            'equifit/edit/:id/forms/:id': 'equifitEdit'
        },

//        index: function () {
//            console.log("Welcome to your / route.");
//        },

        equifit: function () {
            app.subApp = 'equifit';

            require(['modules/equifit/index'],
                function (Equifit) {
                    Equifit.renderLayout();
                });
        },

        equifitCreate: function (formId) {
            app.subApp = 'equifit';
            app.flow = 'create';

            if (_.isUndefined(formId)) {
                require(['modules/equifit/forms'],
                    function (Equifit) {
                        Equifit.renderLayout();
                    });
            }
            else {
                require(['modules/equifit/' + formId],
                    function (Equifit) {
                        Equifit.renderLayout();
                    });
            }
        },

        equifitEdit: function (equifitId, formId) {
            app.flow = 'edit';
            app.equifitId = equifitId;
            app.formId = formId;

            if (_.isUndefined(formId)) {
                console.log('render forms collection for equifit id ', equifitId);
                require(['modules/equifit/forms'],
                    function (Equifit) {
                        Equifit.renderLayout(equifitId);
                    });
            }
            else {
                //require(['modules/equifit/' + formId],
                require(['modules/equifit/form'],
                    function (Equifit) {
                        Equifit.renderLayout(equifitId, formId);
                    });
            }
        }


    });

    module.exports = Router;
});
