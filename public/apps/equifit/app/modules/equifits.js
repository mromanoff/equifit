define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var EquifitEntities = require('./entities/equifit');
    var EquifitView = require('./views/equifits');

    var Equifit = {};

    /// create an instance of forms collection.
    var equifitEntities = new EquifitEntities();

    Equifit.Layout = Backbone.Layout.extend({
        template: 'equifits',

        events: {
            'click .createNew': 'createNew',
            'click .printBlankForm': 'printForm'
        },


        serialize: function () {
            return this.model;
        },


        printForm: function (e) {
            e.preventDefault();
            console.log('printBlankForm');
            window.location.href = '/assets/files/equifit-forms.pdf';
        },

        createNew: function (e) {
            e.preventDefault();
            console.log('Create New');
            app.router.navigate('/equifit/create', { trigger: true });
        }
    });

    // render layout
    Equifit.init = function () {
        // Fetch data
        equifitEntities.fetch().then(
            function () {
                app.useLayout('layouts/main').setViews({
                    '#content':  new Equifit.Layout({
                        model: { memberName : app.store.memberName},

                        id:'equifit',
                        views: {
                            '.container': new EquifitView({
                                collection: equifitEntities
                            })
                        }
                    })
                }).render();
                $('title').html('Equifit');
            },
            function (err) {
                var message = app.exceptionHandling(err);
                console.log('ERROR: ', err);
                app.useLayout('layouts/main').setViews({
                    '#content': new Messages.Views.Warning({
                        model: {
                            type: 'alert-error',
                            code: 'Sorry, ',
                            text: message
                        }
                    })
                }).render();
            }
        );
    };

    module.exports = Equifit;
});