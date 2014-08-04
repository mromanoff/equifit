/**
 * Created by mromanoff on 7/24/2014.
 */
// Equifit module
define([
        '../../../app'
    ],
    function () {
        'use strict';
       var model = Backbone.Model.extend({
            defaults: {
                createdAt: null,
                updatedAt: null,
                updatedBy: null,
                clubName: null,
                complete: false
            }
        });

        return Backbone.Collection.extend({
            model: model,
            url: function () {
                return '/app/mocks/equifit/equifits.json';
                //return '/equifit/api/members/1002209379/equifits/';
            }
        });
    });
