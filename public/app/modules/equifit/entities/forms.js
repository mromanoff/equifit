/**
 * Created by mromanoff on 7/24/2014.
 */
// Equifit module
define([
        '../../../app'
    ],

    function (app) {
        'use strict';

        var Forms = app.module();

        Forms.Form = Backbone.Model.extend({
            defaults: {
                id: null,
                title: null,
                description: null,
                slug: null,
                complete: false
            }
        });

        return Backbone.Collection.extend({
            model: Forms.Form,
            url: function () {
                return '/app/mocks/equifit/forms.json';
            }
        });
    });
