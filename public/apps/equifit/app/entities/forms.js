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
            template: null,
            content: null,
            data: null
        },

        urlRoot: function () {
            return '/equifit/api/clients/' + app.store.get('clientId') + '/equifits/' + app.store.get('equifitId') + '/documents/';
        },
        //TODO: keep this for mongoose and MondoDB
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

            // show loading view  while fetching data
            msgBus.commands.execute('loading:show');

            //setTimeout(function(){
            equifit.fetch({
                success: function(data){
                    msgBus.commands.execute('loading:hide');
                    defer.resolve(data);
                },
                error: function(model, jqXHR, textStatus){
                    msgBus.commands.execute('loading:hide');
                    defer.reject(model, jqXHR, textStatus);
                }
            });
           // }, 10000);
            return defer.promise();
        },

        createFormEntity: function (templateId) {
            var model = new Entities.Form();
            var defer = $.Deferred();

            // show loading view  while fetching data
            msgBus.commands.execute('loading:show');

           // setTimeout(function(){
            model.save({templateId: templateId}, {
                wait : true,
                success: function (data) {
                    msgBus.commands.execute('loading:hide');
                    defer.resolve(data);
                },
                error: function (model, jqXHR, textStatus) {
                    msgBus.commands.execute('loading:hide');
                    defer.reject(model, jqXHR, textStatus);
                }
            });
           // }, 1000);
            return defer.promise();
        },

        updateFormEntity: function (form, options) {
            options = (options || {});

            var model = new Entities.Form({id: form.id});
            var defer = $.Deferred();

            // show loading view  while fetching data or not for auto save
            if(!options.silent) {
                msgBus.commands.execute('loading:show');
            }

          // setTimeout(function(){
            model.save({
                data: form.get('data'),
                content: form.get('content')
            }, {
                wait : true,
                success: function (data) {
                    msgBus.commands.execute('loading:hide');
                    defer.resolve(data);
                },
                error: function (model, jqXHR, textStatus) {
                    msgBus.commands.execute('loading:hide');
                    defer.reject(model, jqXHR, textStatus);
                }
            });
           // }, 2000);
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

    msgBus.reqres.setHandler('form:entity:auto:save', function (form) {
        return API.updateFormEntity(form, {silent: true});
    });

});