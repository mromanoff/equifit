define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var Backbone = require('backbone');

    // Defining the application router.
    var Router = Backbone.Router.extend({
        routes: {
            'equifit(/)': 'equifit',
            'equifit/create(/)': 'equifitCreate',
            'equifit/:id': 'equifitEdit',
            'equifit/:id/forms/:id': 'equifitEdit'
        },

        equifit: function () {
            require(['./controllers/equifits'],
                function (Equifit) {
                    Equifit.init();
                });
        },

        equifitCreate: function () {
            require(['./controllers/create'],
                function (Equifit) {
                    Equifit.init();
                });
        },

        equifitEdit: function (equifitId, formId) {
            app.store.set({
                equifitId: equifitId,
                formId: formId
            });

            if (_.isNull(formId)) {
                require(['./controllers/forms'],
                    function (Equifit) {
                        Equifit.init(equifitId);
                    });
            }
            else {
                require(['./controllers/form'],
                    function (Equifit) {
                        Equifit.init(equifitId, formId);
                    });
            }
        }
    });

    module.exports = Router;
});
