define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var msgBus = require('msgbus');
    var EquifitView;

    var Item = Backbone.View.extend({
        manage: true,
        template: 'form-item',
        tagName: 'li',
        events: {
            'click': 'getForm'
        },

        serialize: function () {
            return this.model.toJSON();
        },

        initialize: function () {
            console.log('form model ', this.model.toJSON());
        },

        getForm: function (e) {
            e.preventDefault();
            var url = '/equifit/client/' + app.store.get('clientId') + '/equifit/' + app.store.get('equifitId');

            if(this.model.has('id')) {
                // /equifit/member/{1234}/equifit/{123}/form/{123}  GET
                url = url + '/form/' + this.model.id;
            } else {
                msgBus.trigger('equifit:form:create', this.model.get('templateId'));
            }

            //app.store.set({
            //    pageTitle: this.model.get('title'),
            //    formName: this.model.get('title'),
            //    formId: this.model.get('_id')
            //});

            app.router.navigate(url, {trigger: true});
        }
    });

    var ItemEmpty = Backbone.View.extend({
        manage: true,
        template: 'form-item-empty'
    });

    EquifitView = Backbone.View.extend({
        manage: true,
        template: 'equifit',

        events: {
            'click .submit': 'updateEquifit'
        },

        serialize: function () {
            //return app.store.toJSON();
            var data = _.extend({}, this.model.toJSON());
            data.url = app.store.get('url');
            return data;
        },

        beforeRender: function () {
            var documents = new Backbone.Collection(this.model.get('documents'));
            // check if there is no items in collection
            if (_.isEqual(_.size(documents), 0)) {
                this.insertView('ul', new ItemEmpty());
            } else {
                documents.each(function (item) {
                    this.insertView('ul', new Item({
                        model: item
                    }));
                }, this);
            }

 //           self.$('.submit').attr('disabled', 'disabled').text('submitted');

        },

        updateEquifit: function (e) {
            e.preventDefault();
            msgBus.trigger('equifit:equifit:update', this.model);
        }
    });

    module.exports = EquifitView;
});