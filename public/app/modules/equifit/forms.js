// Equifit module
define([
        '../../../../app',
        'modules/equifit/entities/forms',
        'modules/equifit/views/forms'
    ],

    function (app, Forms, FormsView) {
        'use strict';

        var Equifit = app.module();

        /// create an instance of forms collection.
        var forms = new Forms();

        Equifit.Views.Layout = Backbone.Layout.extend({
            template: 'equifit/forms'
        });

        // render layout
        Equifit.renderLayout = function () {
            // Fetch data
            forms.fetch().then(
                function () {
                    app.useLayout('layouts/main').setViews({
                        '#content':  new Equifit.Views.Layout({
                            id:'equifit',
                            views: {
                                '.container': new FormsView({
                                    collection: forms
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

        return Equifit;
    });