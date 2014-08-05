define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var backbone = require('backbone');
    var EquifitEntities;

    var Model = Backbone.Model.extend({
        defaults: {
            id: null,
            createdAt: null,
            updatedAt: null,
            updatedBy: null,
            clubName: null,
            complete: false
        }
    });

    EquifitEntities = Backbone.Collection.extend({
        model: Model,
        url: function () {
            //return '/apps/equifit/api/equifits.json';
            return '/equifit/api/members/' + app.store.get('memberId') + '/equifits/';
        }
    });

    module.exports = EquifitEntities;
});
