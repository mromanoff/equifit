define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var Backbone = require('backbone');
    var Form = require('backbone-forms');
    require('views/forms-template');
    var MessageView = require('views/message');
    var SimpleContent = require('views/simple-content');
    var FormView;
    var form;

    var Field = function(form, editor) {
        this.form = form;
        this.editor = editor;
        this.$el = this.editor.$el;
        this.action = this.$el.data('action');
        this.condition = this.$el.data('condition');
        this.target = this.$el.data('target');
    };

    Field.prototype.initialize = function() {
        if (this.editor.getValue() === this.$el.data('condition')) {
            this.$el.find('.' + this.target).slideDown(200);
        }
        else {
            this.$el.find('.' + this.target).slideUp(200);
        }
    };

    Field.prototype.bind = function() {
        this.form.on(this.editor.key + ':change', function () {
            this.initialize();
        }, this);
    };

    FormView = Backbone.Layout.extend({
        template: 'form',
        events: {
            'click .update': 'updateForm',
            'click .show-form': 'showForm',
            'click .show-equifit': 'showEquifit',
            'click .show-equifits': 'showEquifits'
        },

        initialize: function () {
            msgBus.commands.execute('scroll:top');
        },

        beforeRender: function () {
            var FormModel = Backbone.Model.extend();
            var formModel = new FormModel(this.model.get('data'));
            form = new Form({
                model: formModel,
                schema: this.model.get('schema'),
                fieldsets: this.model.get('fieldsets'),
                idPrefix: this.model.get('idPrefix')
            }).render();

            _.each(form.fields, function (editor) {
                if (editor.$el.hasClass('eventBinder')) {
                    var field = new Field(form, editor);
                    field.initialize();
                    field.bind();
                }
            }, this);

            // check if consent form is signed
            if (!app.store.get('isSigned')) {
                this.setView('.message', new MessageView());
            }

            this.insertView('.content', new SimpleContent({model: this.model.get('content')}));
        },

        serialize: function () {
            return app.store.toJSON();
        },

        afterRender: function () {
            // append form to the rendered view.
            this.$el.find('.form').html(form.el);
        },

        showForm: function (e) {
            e.preventDefault();
            var url = 'client/' + app.store.get('clientId') + '/equifit/' + app.store.get('equifitId') + '/form/';
            var formId = $(e.currentTarget).data('id');
            var templateId = $(e.currentTarget).data('template-id');

            // if form created use get else post
            if(formId) {
                url = url + formId;
                msgBus.commands.execute('form:get', formId);
            } else {
                msgBus.commands.execute('form:create', templateId);
            }
            app.router.navigate(url);
        },

        showEquifit: function (e) {
            e.preventDefault();
            var url = 'client/' + app.store.get('clientId') + '/equifit/' + app.store.get('equifitId');
            msgBus.commands.execute('equifit:get', app.store.get('equifitId'));
            app.router.navigate(url);
        },

        showEquifits: function (e) {
            e.preventDefault();
            var url = 'client/' + app.store.get('clientId');
            msgBus.commands.execute('equifits:get', app.store.get('clientId'));
            app.router.navigate(url);
        },

        updateForm: function (e) {
            e.preventDefault();
            var errors = form.commit();
            this.model.set({
                data: form.model.toJSON()
            });

            if (_.isEmpty(errors)) {
                msgBus.commands.execute('form:update', this.model);
            }
            else {
                console.error('form did\'t pass validation:', errors);
            }
        }
    });

    module.exports = FormView;
});