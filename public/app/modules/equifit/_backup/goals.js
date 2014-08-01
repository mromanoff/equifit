/**
 * Created by mromanoff on 7/24/2014.
 */
// Equifit module
define([
        '../../../app'
    ],

// Map dependencies from above array.
    function (app) {
        'use strict';

        var Equifit = app.module();

        Equifit.Views.Layout = Backbone.Layout.extend({
            template: 'equifit/goals'
        });

        // render layout
        Equifit.renderLayout = function () {
            app.useLayout('layouts/main').setViews({
                '#content': new Equifit.Views.Layout({
                    id:'equifit',
                    views: {
                    }
                })
            }).render();
            $('title').html('Equifit - Goals');
        };

        return Equifit;
    });
