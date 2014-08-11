define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var EquifitEntity = require('entities/equifit');
    var EquifitEntities;

    EquifitEntities = Backbone.Collection.extend({
        model: EquifitEntity,

        url: function () {
            //return '/apps/equifit/api/equifits.json';
            return '/equifit/api/members/' + app.store.get('memberId') + '/equifits/';
        }
    });

    module.exports = EquifitEntities;
});
