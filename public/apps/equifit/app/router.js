define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');
    var msgBus = require('msgbus');

    // Defining the application router.
    var Router = Backbone.Router.extend({

        initialize: function () {
            console.info('route init');
        },

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
                msgBus.commands.execute('equifits:get');
            }
            else if (!formId) {
                msgBus.commands.execute('store:set', {
                    clientId: clientId,
                    equifitId: equifitId
                });
                console.log('route get equifit:', clientId, equifitId);
                msgBus.commands.execute('equifit:get');
                //
                //

                //require(['./controllers/equifit'],
                //    function (controller) {
                //        controller.getEquifit(equifitId);
                //    });
            }
            else {
                msgBus.commands.execute('store:set', {
                    clientId: clientId,
                    equifitId: equifitId,
                    formId: formId
                });
                console.log('route get form:', clientId, equifitId, formId);

                msgBus.commands.execute('form:get');



                //require(['./controllers/form'],
                //    function (controller) {
                //        controller.getForm(formId);
                //    });
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

            //require(['./controllers/error'],
            //    function (controller) {
            //        controller.init();
            //    });
        }
    });

    module.exports = Router;
});
