define(function (require) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var msgBus = require('msgbus');
    var LoadingView = require('views/loading');
    var Entities = {};

    var loadingView = function () {
        app.layout.setView('.main-container', new LoadingView());
        app.layout.render();
    };

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
            idPrefix: null,
            content: null,
            data: null
        },

        urlRoot: function () {
            return '/equifit/api/clients/' + app.store.get('clientId') + '/equifits/' + app.store.get('equifitId') + '/documents/';
        },

        parse: function (response) {
            // backbone-forms needs 'schema' property. in mongoose 'schema' is reserved word.
            // In mongoose we had to name it as a formSchema
            // remap formSchema to schema
            response.schema = _.clone(response.formSchema);
            delete response.formSchema;
            return response;
        }
    });

    var API = {
        getFormEntity: function(formId){
            var equifit = new Entities.Form({_id: formId});
            var defer = $.Deferred();

            // show spinner while fetching data
            loadingView();

            setTimeout(function(){
            equifit.fetch({
                success: function(data){
                    defer.resolve(data);
                },
                error: function(data){
                    defer.resolve(data);
                }
            });
            }, 1000);
            return defer.promise();
        },

        createFormEntity: function (templateId) {
            console.warn('create form:', templateId);
            var model = new Entities.Form();
            var defer = $.Deferred();


            // show spinner while fetching data
            loadingView();

            setTimeout(function(){
            model.save({templateId: templateId}, {
                wait : true,
                success: function (data) {
                    defer.resolve(data);
                },
                error: function (data) {
                    defer.reject(data);
                }
            });
            }, 1000);
            return defer.promise();
        },

        updateFormEntity: function (form) {
            var model = new Entities.Form({_id: form.id});
            var defer = $.Deferred();

            // show spinner while fetching data
            loadingView();

            setTimeout(function(){
            model.save({
                data: form.get('data'),
                content: form.get('content')
            }, {
                wait : true,
                success: function (data) {
                    defer.resolve(data);
                },
                error: function (data) {
                    defer.reject(data);
                }
            });
            }, 2000);
            return defer.promise();
        }
    };

    msgBus.reqres.setHandler('form:entity', function (id) {
        return API.getFormEntity(id);
    });

    msgBus.reqres.setHandler('form:entity:create', function (templateId) {
        return API.createFormEntity(templateId);
    });

    msgBus.reqres.setHandler('form:entity:update', function (form) {
        return API.updateFormEntity(form);
    });

});