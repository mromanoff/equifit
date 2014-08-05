define(function (require, exports, module) {
    "use strict";

    var app = require('app');

       var Equifit = {};

       Equifit.Model = Backbone.Model.extend({
            defaults: {
                id: null,
                createdAt: null,
                updatedAt: null,
                updatedBy: null,
                clubName: null,
                complete: false
            }
        });

        Equifit.Collection = Backbone.Collection.extend({
            model: Equifit.Model,
            url: function () {
                return '/apps/equifit/api/equifits.json';
                //return '/equifit/api/members/1002209379/equifits/';
            }
        });

        module.exports = Equifit.Collection;
    });
