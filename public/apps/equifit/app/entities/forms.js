define(function (require) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var msgBus = require('msgbus');
    var Entities = {};

    Entities.Form = Backbone.Model.extend({
        idAttribute: '_id',
        defaults: {
            title: null,
            templateId: null,
            templateType: null,
            totalQuestions: null,
            totalCompletedQuestions: null,
            schema: null,
            fieldsets: null,
            data: null
        },

        //url: function () {
        //
        //    console.warn('form id last ', app.store.get('formId'));
        //
        //    if (!_.isEmpty(app.store.get('formId'))) {
        //        return '/equifit/api/clients/' + app.store.get('clientId') + '/equifits/' + app.store.get('equifitId') + '/documents/' + app.store.get('formId');
        //    } else {
        //        return '/equifit/api/clients/' + app.store.get('clientId') + '/equifits/' + app.store.get('equifitId') + '/documents/';
        //    }
        //},

        urlRoot: function () {
            return '/equifit/api/clients/' + app.store.get('clientId') + '/equifits/' + app.store.get('equifitId') + '/documents/';
        },

        parse: function (response) {
            // backbone-forms needs 'schema' property. in mongoose 'schema' is reserved word.
            // In mongoose we had to name it as a formSchema
            response.schema = _.clone(response.formSchema);
            delete response.formSchema;
            return response;
        },
        //
        //updateForm: function (model) {
        //    var deferred = $.Deferred();
        //    //setTimeout(function () {
        //    model.save(model, {
        //        wait: true,
        //        success: deferred.resolve,
        //        error: deferred.reject
        //    });
        //    //}, 2000);
        //    return deferred.promise();
        //}
    });

    //Entities.FormCollection = Backbone.Collection.extend({
    //    model: Entities.Form,
    //
    //    url: function () {
    //        return '/equifit/api/clients/' + app.store.get('clientId') + '/equifits/' + app.store.get('equifitId') + '/documents';
    //    }
    //});

    var API = {
        //getFormEntities: function () {
        //    var forms = new Entities.FormCollection();
        //    var defer = $.Deferred();
        //    forms.fetch({
        //        success: function (data) {
        //            defer.resolve(data);
        //        },
        //        error: function (data) {
        //            defer.resolve(undefined);
        //        }
        //    });
        //    return defer.promise();
        //},

        getFormEntity: function(formId){
            var equifit = new Entities.Form({_id: formId});
            var defer = $.Deferred();

            //setTimeout(function(){
            equifit.fetch({
                success: function(data){
                    defer.resolve(data);
                },
                error: function(data){
                    defer.resolve(undefined);
                }
            });
            //}, 2000);
            return defer.promise();
        }
    };

    //msgBus.reqres.setHandler('form:entities', function () {
    //    return API.getFormEntities();
    //});

    msgBus.reqres.setHandler('form:entity', function (id) {
        return API.getFormEntity(id);
    });

});