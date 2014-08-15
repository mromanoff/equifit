define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var FormEntity = require('./form');
    var FormEntities;

    FormEntities = Backbone.Collection.extend({
        model: FormEntity,
        url: function () {
            return '/equifit/api/members/' + app.store.get('clientId') + '/equifits/' + app.store.get('equifitId') + '/documents';
        }
    });

    module.exports = FormEntities;
});