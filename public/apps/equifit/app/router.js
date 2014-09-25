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
                msgBus.commands.execute('equifits:get',  clientId);
            }
            else if (!formId) {
                msgBus.commands.execute('store:set', {
                    clientId: clientId,
                    equifitId: equifitId
                });
                console.log('route get equifit:', clientId, equifitId);
                msgBus.commands.execute('equifit:get',  equifitId);
            }
            else {
                msgBus.commands.execute('store:set', {
                    clientId: clientId,
                    equifitId: equifitId,
                    formId: formId
                });
                console.log('route get form:', clientId, equifitId, formId);
                msgBus.commands.execute('form:get', formId);
            }
        },

        createEquifit: function (clientId) {
            msgBus.commands.execute('store:set', {
                clientId: clientId
            });
            console.log('route create equifit', clientId);
            msgBus.commands.execute('equifit:create');
        },

        errorPage: function () {
            console.log('route error');
            msgBus.commands.execute('equifit:error');
        }
    });

    module.exports = Router;
});
