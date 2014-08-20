define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var msgBus = require('msgbus');
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

            console.log('route equifit', clientId, equifitId, formId);

            if (!equifitId && !formId) {
                msgBus.trigger('equifit:store:update', {
                    clientId: clientId
                });
                console.log('route get equifits', clientId);
                require(['./controllers/equifits'],
                    function (Equifit) {
                        Equifit.init(clientId);
                    });
            }
            else if (!formId) {
                msgBus.trigger('equifit:store:update', {
                    clientId: clientId,
                    equifitId: equifitId
                });
                console.log('route get equifit', clientId, equifitId);
                require(['./controllers/equifit'],
                    function (Equifit) {
                        Equifit.init(clientId, equifitId);
                    });
            }
            else {
                msgBus.trigger('equifit:store:update', {
                    clientId: clientId,
                    equifitId: equifitId,
                    formId: formId
                });
                console.log('route get form', clientId, equifitId, formId);
                require(['./controllers/form'],
                    function (Equifit) {
                        Equifit.init(clientId, equifitId, formId);
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
                    Equifit.createNew(clientId);
                });
        }
    });

    module.exports = Router;
});
