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
                msgBus.commands.execute('store:set', {
                    clientId: clientId
                });

                console.log('route get equifits:', clientId);
                require(['./controllers/equifits'],
                    function (controller) {
                        controller.getEquifits(clientId);
                    });
            }
            else if (!formId) {
                msgBus.commands.execute('store:set', {
                    clientId: clientId,
                    equifitId: equifitId
                });
                console.log('route get equifit:', clientId, equifitId);
                require(['./controllers/equifit'],
                    function (controller) {
                        controller.getEquifit(equifitId);
                    });
            }
            else {
                msgBus.commands.execute('store:set', {
                    clientId: clientId,
                    equifitId: equifitId,
                    formId: formId
                });
                console.log('route get form:', clientId, equifitId, formId);
                require(['./controllers/form'],
                    function (controller) {
                        controller.getForm(formId);
                    });
            }
        },

        createEquifit: function (clientId) {
            msgBus.commands.execute('store:set', {
                clientId: clientId
            });
            console.log('route create equifit', clientId);
            require(['./controllers/equifit'],
                function (controller) {
                    controller.createNew();
                });
        },

        errorPage: function () {
            console.log('route error');
            require(['./controllers/error'],
                function (controller) {
                    controller.init();
                });
        }
    });

    module.exports = Router;
});
