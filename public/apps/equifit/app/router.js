define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var Backbone = require('backbone');

    // Defining the application router.
    var Router = Backbone.Router.extend({
        routes: {
            'equifit/client/:id(/)': 'equifit',
            'equifit/client/:id/equifit/:id': 'equifit',
            'equifit/client/:id/equifit/:id/form/:id': 'equifit',
            'equifit/client/:id/create(/)': 'createEquifit'
        },

        equifit: function (clientId, equifitId, formId) {
            console.log('route equifit');
            if (!equifitId && !formId) {
                require(['./controllers/equifits'],
                    function (Equifit) {
                        Equifit.init(clientId);
                    });
            }
            else if (!formId) {
                require(['./controllers/equifit'],
                    function (Equifit) {
                        Equifit.init(clientId, equifitId);
                    });
            }
            else {
                require(['./controllers/form'],
                    function (Equifit) {
                        Equifit.init(clientId, equifitId, formId);
                    });
            }
        },

        createEquifit: function () {
            console.log('route equifit');
            require(['./controllers/create'],
                function (Equifit) {
                    Equifit.init();
                });
        }
    });

    module.exports = Router;
});
