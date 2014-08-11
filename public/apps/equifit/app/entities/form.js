define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var FormsEntitie;


    FormsEntitie = Backbone.Model.extend({
        idAttribute: '_id',

        defaults: {
            id: this._id || null,
            title: null,
            complete: false,
            slug: null,
            schema: null,
            fieldsets: null,
            data: null
        },

        parse: function (response) {
            // backbone-forms needs 'schema' property. in mongoose 'schema' is reserved word.
            // In mongoose we had to name it as a formSchema
            response.schema = _.clone(response.formSchema);
            delete response.formSchema;
            return response;
        }
    });


    module.exports = FormsEntitie;
});