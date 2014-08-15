define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var Backbone = require('backbone');

    // Defining the application router.
    var Router = Backbone.Router.extend({
        routes: {
            'equifit/member/:id(/)': 'equifit',
            'equifit/member/:id/equifit/:id': 'equifit',
            'equifit/member/:id/equifit/:id/form/:id': 'equifit',
            'equifit/member/:id/create(/)': 'createEquifit'
        },

        equifit: function (memberId, equifitId, formId) {
            console.log('route equifit');
            if (!equifitId && !formId) {
                require(['./controllers/equifits'],
                    function (Equifit) {
                        Equifit.init(memberId);
                    });
            }
            else if (!formId) {
                require(['./controllers/equifit'],
                    function (Equifit) {
                        Equifit.init(memberId, equifitId);
                    });
            }
            else {
                require(['./controllers/form'],
                    function (Equifit) {
                        Equifit.init(memberId, equifitId, formId);
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
