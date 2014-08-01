/**
 * Created by mromanoff on 7/24/2014.
 */
// Equifit module
define([
        '../../../../app',
        'modules/equifit/entities/form',
        'modules/equifit/views/form'
    ],

    function (app, FormEntity, FormView) {
        'use strict';

        var Equifit = app.module();

        /// create an instance of forms collection.
        var form = new FormEntity();

        Equifit.Views.Layout = Backbone.Layout.extend({
            template: 'equifit/form'
        });

        Equifit.renderLayout = function () {

            // Fetch data
            form.fetch().then(
                function () {
                    app.useLayout('layouts/main').setViews({
                        '#content':  new Equifit.Views.Layout({
                            id:'equifit',
                            views: {
                                '.container': new FormView({
                                    model: form
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

            app.useLayout('layouts/main').setViews({
                '#content': new Equifit.Views.Layout()
            }).render();
            $('title').html('Equifit - Lifestyle');
        };

        return Equifit;
    });
