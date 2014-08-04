/**
 * Created by mromanoff on 7/24/2014.
 */
// Equifit module
define([
        '../../../app'
    ],

    function (app) {
        'use strict';

        var Equifit = app.module();

        Equifit.Views.Layout = Backbone.Layout.extend({
            template: 'equifit/lifestyle'
        });

        Equifit.init = function () {
            app.useLayout('layouts/main').setViews({
                '#content': new Equifit.Views.Layout()
        }).render();
            $('title').html('Equifit - Lifestyle');
        };

        return Equifit;
    });
