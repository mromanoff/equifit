// Form Model

define([
        '../../../app'
    ],
    function () {
        'use strict';

        return Backbone.Model.extend({
            url: function () {
                return '/app/mocks/equifit/form.json';
            }
        });
    });