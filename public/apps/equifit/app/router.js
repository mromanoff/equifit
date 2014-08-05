define(function (require, exports, module) {
    "use strict";

    // External dependencies.
    var app = require('app');
    var Backbone = require('backbone');

    // Defining the application router.
    var Router = Backbone.Router.extend({
        routes: {
            'equifit(/)': 'equifit',
            'equifit/create(/)': 'equifitCreate',
            'equifit/create/forms/:id': 'equifitCreate',
            'equifit/edit/:id': 'equifitEdit',
            'equifit/edit/:id/forms/:id': 'equifitEdit'
        },

        equifit: function () {
            require(['./modules/equifits'],
                function (Equifit) {
                    Equifit.init();
                });
        },

        equifitCreate: function (formId) {
            app.store.set({flow: 'create'});

//            if (_.isUndefined(formId)) {
//                require(['./modules/equifit/forms'],
//                    function (Equifit) {
//                        Equifit.init();
//                    });
//            }
//            else {
//                require(['./modules/equifit/' + formId],
//                    function (Equifit) {
//                        Equifit.init();
//                    });
//            }
        },

        equifitEdit: function (equifitId, formId) {
            app.store.set({
                appFlow: 'edit',
                equifitId: equifitId,
                formId: formId
            });

            //TODO: check why formId attribute is null????
            //if (_.isUndefined(formId)) {
            if (_.isNull(formId)) {
                require(['./modules/forms'],
                    function (Equifit) {
                        Equifit.init(equifitId);
                    });
            }
            else {
                require(['./modules/form'],
                    function (Equifit) {
                        Equifit.init(equifitId, formId);
                    });
            }
        }
    });

    module.exports = Router;
});
