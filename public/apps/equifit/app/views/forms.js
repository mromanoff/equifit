define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var FormsView;

    app.store.set({
        slug: 'forms'
    });

    var Item = Backbone.View.extend({
        manage: true,
        template: 'form-item',
        tagName: 'li',
        events: {
            'click': 'showForm'
        },

        serialize: function () {
            return this.model.toJSON();
        },

        showForm: function (e) {
            e.preventDefault();
            var url = '/equifit/' + app.store.get('equifitId') + '/forms/' + this.model.id;

            app.store.set({
                pageTitle: this.model.get('title'),
                formName: this.model.get('title'),
                formId: this.model.id
            });

            app.router.navigate(url, {trigger: true});
        }
    });

    var ItemEmpty = Backbone.View.extend({
        manage: true,
        template: 'form-item-empty'
    });

    FormsView = Backbone.View.extend({
        manage: true,
        template: 'forms-list',

        events: {
            'click .consentForm': 'showConsentForm',
            'click .submit': 'submitEquifit'
        },

        serialize: function () {
            return app.store.toJSON();
        },

        beforeRender: function () {
            // check if there is no items in collection
            if (_.isEqual(_.size(this.collection), 0)) {
                this.insertView('ul', new ItemEmpty());
            } else {
                this.collection.each(function (item) {
                    this.insertView('ul', new Item({
                        model: item
                    }));
                }, this);
            }
        },

        showConsentForm: function (e) {
            e.preventDefault();
            var url = '/equifit/consent-form';
            app.router.navigate(url, {trigger: true});
        },

        submitEquifit: function (e) {
            e.preventDefault();
            var data = {
                //equifitId: app.store.toJSON().equifitId,
                //id: app.store.toJSON().equifitId,
                //_id: app.store.toJSON().equifitId,
                isValidated: false
            };

            require(['../controllers/submit-equifit'],
                function (Equifit) {
                    Equifit.init(data);
                });
        }
    });

    module.exports = FormsView;
});