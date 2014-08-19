define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var FormEntity;

    FormEntity = Backbone.Model.extend({
        idAttribute: '_id',

        defaults: {
            title: null,
            templateId: null,
            isComplete: false,
            totalQuestions: null,
            totalCompletedQuestions: null,
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
        },

        updateForm: function (model) {
            var deferred = $.Deferred();
            //setTimeout(function () {
            model.save(model, {
                wait: true,
                success: deferred.resolve,
                error: deferred.reject
            });
            //}, 2000);
            return deferred.promise();
        }
    });
    module.exports = FormEntity;
});