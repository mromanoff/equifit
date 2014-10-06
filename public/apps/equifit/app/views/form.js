define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var Backbone = require('backbone');
    var Form = require('backbone-forms');
    var FormComponents = require('components/forms');
    require('views/forms-template');
    var MessageView = require('views/message');
    var SimpleContent = require('views/simple-content');
    var FormView;
    var form;

    FormView = Backbone.Layout.extend({
        template: 'form',
        events: {
            'click .update': 'updateForm',
            'click .show-form': 'showForm'
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
                template: (_.isNull(this.model.get('template'))) ? null : _.template(this.model.get('template'))
            }).render();

            _.each(form.fields, function (editor) {
                // check if editor has a data-bind
                if (editor.$el.data('bind')) {
                    var field = new FormComponents.Field(form, editor);
                    field.toggle();
                    field.bind();
                }
                // bind  autoSaveForm to on blur event.  first pass for auto save feature :-)
                form.on(editor.key + ':blur', function () {
                    this.autoSaveForm();
                }, this);
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
            this.$('.form').html(form.el);

            //Fms need print summary field at the end
            if(_.isEqual(this.model.get('templateType'), 'Fms')) {
                console.log('FMS form', this.$el);
                this.$('form').append('<div class="summary"><strong>Total FMS Score</strong> <span>{total} Points</span></div>');
            }
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

        autoSaveForm: function () {
            var errors = form.commit();
            this.model.set({
                data: form.model.toJSON()
            });

            if (_.isEmpty(errors)) {
                msgBus.commands.execute('form:auto:save', this.model);
            }
            else {
                console.error('form did\'t pass validation:', errors);
            }
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