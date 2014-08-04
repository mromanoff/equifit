/**
 * Created by mromanoff on 7/24/2014.
 */

define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var FormEntity = require('./entities/form');
    var FormView = require('./views/form');

        var Equifit = {};

        /// create an instance of forms collection.
        var form = new FormEntity();

        Equifit.Layout = Backbone.Layout.extend({
            template: 'equifit/form'
        });

        Equifit.init = function () {
            // Fetch data
            form.fetch().then(
                function () {
                    app.useLayout('layouts/main').setViews({
                        '#content':  new Equifit.Layout({
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
        };

        module.exports = Equifit;
    });
