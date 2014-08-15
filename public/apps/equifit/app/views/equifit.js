define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var EquifitView;

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
            // /equifit/member/{1234}/equifit/{123}/form/{123}
            var url = '/equifit/client/' + app.store.get('memberId') + '/equifit/' + app.store.get('equifitId') + '/form/' + this.model.get('_id');

            app.store.set({
                pageTitle: this.model.get('title'),
                formName: this.model.get('title'),
                formId: this.model.get('_id')
            });

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
            'click .consentForm': 'showConsentForm',
            'click .submit': 'submitEquifit'
        },

        serialize: function () {
            //return app.store.toJSON();

            var data = _.extend({}, this.model.toJSON());
            data.url = app.store.get('url');

            console.log('data', data);

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

    module.exports = EquifitView;
});