define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');
    var msgBus = require('msgbus');

    // Defining the application router.
    var Router = Backbone.Router.extend({

        routes: {
            'client/:id(/)': 'equifit',
            'client/:id/equifit/:id': 'equifit',
            'client/:id/equifit/:id/form/:id': 'equifit',
            'client/:id/create(/)': 'createEquifit',
            'error': 'errorPage'
        },

        equifit: function (clientId, equifitId, formId) {
            if (!equifitId && !formId) {
                msgBus.trigger('equifit:store:update', {
                    clientId: clientId
                });
                console.log('route get equifits:', clientId);
                require(['./controllers/equifits'],
                    function (Equifit) {
                        Equifit.init();
                    });
            }
            else if (!formId) {
                msgBus.trigger('equifit:store:update', {
                    clientId: clientId,
                    equifitId: equifitId
                });
                console.log('route get equifit:', clientId, equifitId);
                require(['./controllers/equifit'],
                    function (Equifit) {
                        Equifit.init();
                    });
            }
            else {
                msgBus.trigger('equifit:store:update', {
                    clientId: clientId,
                    equifitId: equifitId,
                    formId: formId
                });
                console.log('route get form:', clientId, equifitId, formId);
                require(['./controllers/form'],
                    function (Equifit) {
                        Equifit.init();
                    });
            }
        },

        createEquifit: function (clientId) {
            msgBus.trigger('equifit:store:update', {
                clientId: clientId
            });
            console.log('route create equifit', clientId);
            require(['./controllers/equifit'],
                function (Equifit) {
                    Equifit.createNew();
                });
        },

        errorPage: function () {
            console.log('route error');
            require(['./controllers/error'],
                function (Equifit) {
                    Equifit.init();
                });
        }
    });

    module.exports = Router;
});
