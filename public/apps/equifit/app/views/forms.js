define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var FormsView;

    var Item = Backbone.View.extend({
        manage: true,
        template: 'form-item',
        tagName: 'li',
        events: {
            'click .item': 'renderForm'
        },

        serialize: function () {
            return this.model.toJSON();
        },

        renderForm: function (e) {
            e.preventDefault();
            var url = '/equifit/' + app.store.get('equifitId') + '/forms/' + this.model.id;

            app.store.set({
                formName: this.model.get('title'),
                pageTitle: this.model.get('title'),
                formId: this.model.id
            });

            app.router.navigate(url, { trigger: true });
        }
    });

    var ItemEmpty = Backbone.View.extend({
        manage: true,
        template: 'form-item-empty'
    });

    FormsView = Backbone.View.extend({
        manage: true,
        template: 'forms-list',

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
        }
    });

    module.exports = FormsView;
});