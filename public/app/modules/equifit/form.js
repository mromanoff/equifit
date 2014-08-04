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
            template: 'equifit/form',

            serialize: function () {
                return this.model;
            }
        });

        Equifit.init = function (equifitId, formId) {

            form.url =  function () {
                return '/app/mocks/equifit/form.json';
                //return '/equifit/api/members/1002209379/equifits/' + equifitId + '/documents/' + formId;
            };

            // Fetch data
            form.fetch().then(
                function () {
                    app.useLayout('layouts/main').setViews({
                        '#content':  new Equifit.Layout({
                            id:'equifit',
                            model: {
                                memberName: app.store.memberName,
                                memberId: app.store.memberId,
                                equifitId: app.store.equifitId,
                                date: app.store.equifitDate,
                                formName: app.store.formName,
                                formId: app.store.formId
                            },

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
