define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var EquifitEntity;

    EquifitEntity = Backbone.Model.extend({
        idAttribute: '_id',

        defaults: {
            id: null,
            createdAt: null,
            updatedAt: null,
            updatedBy: null,
            clubName: null,
            complete: false
        }
    });

    module.exports = EquifitEntity;
});
