define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var SubmitEquifitEntity;

    SubmitEquifitEntity = Backbone.Model.extend({
        idAttribute: '_id',

        defaults: {
            isValidated: null
        },

        url: function () {
            //return '/equifit/api/members/' + app.store.get('clientId') + '/equifits/' + app.store.get('equifitId');
            return '/equifit/api/members/' + app.store.get('clientId') + '/equifits/';
        }
    });

    module.exports = SubmitEquifitEntity;
});