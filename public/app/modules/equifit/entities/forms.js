/**
 * Created by mromanoff on 7/24/2014.
 */
// Equifit module

define(function (require, exports, module) {
    "use strict";

    var app = require('app');

    var Forms = {};

    Forms.Form = Backbone.Model.extend({
        defaults: {
            id: null,
            title: null,
            description: null,
            slug: null,
            complete: false
        }
    });

    Forms.Collection = Backbone.Collection.extend({
        model: Forms.Form,
        url: function () {
            return '/app/mocks/equifit/forms.json';
            //return '/equifit/api/members/1002209379/equifits/1/documents';
        }
    });

    module.exports = Forms.Collection;
});