define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var Backbone = require('backbone');

    // Defining the application router.
    var Router = Backbone.Router.extend({
        routes: {
            'equifit/member/:id(/)': 'equifit',
            'equifit/member/:id/equifits/:id': 'equifit',
            //'equifit/member/:id/create(/)': 'equifitCreate',
            // 'equifit/consent-form(/)': 'consentForm',
            //'equifit/member/:id/equifits/:id': 'equifitEdit',
            'equifit/member/:id/equifits/:id/forms/:id': 'form'
        },

        equifit: function (memberId, equifitId) {

            if (_.isNull(equifitId)) {
                require(['./controllers/equifits'],
                    function (Equifit) {
                        Equifit.init(memberId);
                    });
            }
            else {
                require(['./controllers/equifit'],
                    function (Equifit) {
                        Equifit.init(memberId, equifitId);
                    });
            }
        },


        //equifitCreate: function () {
        //    require(['./controllers/create'],
        //        function (Equifit) {
        //            Equifit.init();
        //        });
        //},

        form: function (memberId, equifitId, formId) {
            app.store.set({
                memberId: memberId,
                equifitId: equifitId,
                formId: formId
            });

            require(['./controllers/form'],
                function (Equifit) {
                    Equifit.init(memberId, equifitId, formId);
                });

        }
        //,

        //consentForm: function () {
        //    require(['./controllers/consent-form'],
        //        function (Equifit) {
        //            Equifit.init();
        //        });
        //},
    });

    module.exports = Router;
});
