/**
 * Created by mromanoff on 7/24/2014.
 */
// Equifit module
define([
        '../../../app',
        'modules/equifit/entities/form',
        //'modules/equifit/views/form'
    ],

    function (app, FormModel) {
        'use strict';

        var Equifit = app.module();

        // TODO: really don't neet it now.
        var formModel = new FormModel();
        formModel.url = '/app/mocks/equifit/personal-info.json';
        formModel.fetch();

        Equifit.Views.Layout = Backbone.Layout.extend({
            template: 'equifit/personal-info'
        });


        Equifit.renderLayout = function () {
            app.useLayout('layouts/main').setViews({
                '#content': new Equifit.Views.Layout()
            }).render();
            $('title').html('Equifit - Personal info');
        };

        return Equifit;
    });
