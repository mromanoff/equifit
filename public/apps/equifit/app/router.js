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
            console.log('route equifit', clientId);
            if (!equifitId && !formId) {
                console.log('route get equifits');
                require(['./controllers/equifits'],
                    function (Equifit) {
                        Equifit.init(clientId);
                    });
            }
            else if (!formId) {
                console.log('route get equifit', clientId, equifitId);
                require(['./controllers/equifit'],
                    function (Equifit) {
                        Equifit.init(clientId, equifitId);
                    });
            }
            else {
                console.log('route get form', clientId, equifitId, formId);
                require(['./controllers/form'],
                    function (Equifit) {
                        Equifit.init(clientId, equifitId, formId);
                    });
            }
        },

        createEquifit: function (clientId) {
            console.log('route create equifit', clientId);
            require(['./controllers/equifit'],
                function (Equifit) {
                    Equifit.createNew(clientId);
                });
        }
    });

    module.exports = Router;
});
