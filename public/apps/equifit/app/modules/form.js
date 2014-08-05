/**
 * Created by mromanoff on 7/24/2014.
 */

define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var FormEntity = require('./entities/form');
    var FormView = require('./views/form');
    var HeaderView = require('./views/header');
    var BreadcrumbView = require('./views/breadcrumb');

        var Form = {};

        /// create an instance of forms collection.
        var formEntity = new FormEntity();

//        Form.Layout = Backbone.Layout.extend({
//            template: 'form',
//
//            serialize: function () {
//                return this.model;
//            }
//        });

        Form.init = function (equifitId, formId) {

            formEntity.url =  function () {
                return '/apps/equifit/api/form.json';
                //return '/equifit/api/members/1002209379/equifits/' + equifitId + '/documents/' + formId;
            };

            // Fetch data
            formEntity.fetch().then(
                function () {
                    app.useLayout('layouts/main').setViews({
                        '.header': new HeaderView({
                            model: new Backbone.Model({ pageTitle: 'Form'})
                        }),
                        '.breadcrumb-container': new BreadcrumbView(),
                        '.main-container': new FormView({
                            model: formEntity
                        })



//                        '#content':  new Form.Layout({
//                            id:'equifit',
//                            model: {
//                                memberName: app.store.memberName,
//                                memberId: app.store.memberId,
//                                equifitId: app.store.equifitId,
//                                date: app.store.equifitDate,
//                                formName: app.store.formName,
//                                formId: app.store.formId
//                            },
//
//                            views: {
//                                '.container': new FormView({
//                                    model: form
//                                })
//                            }
//                        })
                    }).render();
                    $('title').html('Equifit');
                }
            );
        };

        module.exports = Form;
    });
