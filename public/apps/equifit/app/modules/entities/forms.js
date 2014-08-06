define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var Backbone = require('backbone');
    var FormsEntities;
    var Model = Backbone.Model.extend({
        idAttribute: '_id',

        urlRoot: function () {
            return '/equifit/api/members/' + app.store.get('memberId') + '/equifits/' + app.store.get('equifitId') + '/documents';
        },

        parse: function(response) {
            var schema =  response.formSchema;

            console.log('schema name parsed', response, schema);

            response.schema;
            delete response.formShema;

            return response;
        },

        defaults: {
            id: null,
            title: null,
            description: null,
            slug: null,
            complete: false,
            schema1: null,
            fieldsets: null,
            data: null
        }
    });

    FormsEntities = Backbone.Collection.extend({
        model: Model,
        url: function () {
            //return '/apps/equifit/api/forms.json';
            return '/equifit/api/members/' + app.store.get('memberId') + '/equifits/' + app.store.get('equifitId') + '/documents';
        }
    });

    module.exports = FormsEntities;
});