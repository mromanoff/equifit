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

    FormView = Backbone.Layout.extend({
        template: 'form',
        events: {
            'click .update': 'updateForm',
            'click [data-url]': 'showPage'
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



            //TODO move this out of here
            _.each(form.fields, function(editor){
                console.log(editor.key);
                form.on(editor.key + ':change', function(form, editor) {
                    // console.log('field',form.fields[editor.key]);
                    setUp(form.fields[editor.key], editor);
                })
            });

            //TODO move this out of here
            var setUp = function (field, editor) {
                console.log('set up', field, editor);
                var $el = field.$el;

                if ($el.hasClass('eventBinder')) {
                    var action = $el.data('action');
                    var condition = $el.data('condition');
                    var target = $el.data('target');

                    console.log(action, target, condition);
                    console.log('value', editor.getValue());

                    if(editor.getValue() == $el.data('condition')) {
                        // target
                        $el.find('.' + target).slideDown(200);
                    }
                    else {
                        // target
                        $el.find('.' + target).slideUp(200);
                    }
                }
            };





            // check if consent form is signed
            if (!app.store.get('isSigned')) {
                this.setView('.message', new MessageView());
            }

            // check if there is no items in collection
            //if (_.isEqual(_.size(this.collection), 0)) {
                this.insertView('.content', new SimpleContent({ model: this.model.get('content')}));
            //}
        },

        serialize: function () {
            return app.store.toJSON();
        },

        afterRender: function () {
            // append form to the rendered view.
            this.$el.find('.form').html(form.el);
        },

        showPage: function (e) {
            e.preventDefault();
            var url = $(e.currentTarget).data('url');
            app.router.navigate(url, {trigger: true});
        },

        updateForm: function (e) {
            e.preventDefault();
            //TODO: validate form before submitting
            var errors = form.commit();

            console.error('form errors', errors);

            this.model.set({data: form.model.toJSON()});

            console.log('form data to commit', form.model.toJSON());
            console.log('form model to commit', this.model.toJSON());


            if (_.isEmpty(errors)) {
                msgBus.commands.execute('form:update', this.model);

                // update equifit isSigned to true
                ////msgBus.trigger('equifit:equifit:update', { isSigned: true});

                // only if templateType === 'InformedConsent' redirect to Equifit Page
                if(_.isEqual(this.model.get('templateType'), 'InformedConsent')) {
                    var url = 'client/' + app.store.get('clientId') + '/equifit/' + app.store.get('equifitId');
                    app.router.navigate(url, {trigger: true});
                }
            }
            else {
                console.error('form did\'t pass validtion');
            }
        }
    });

    module.exports = FormView;
});