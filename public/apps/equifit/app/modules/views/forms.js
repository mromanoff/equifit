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
            var url;
            e.preventDefault();
            if (_.isEqual(app.store.get('appFlow'), 'edit')) {
                url = '/equifit/' + app.store.get('appFlow') + '/' + app.store.get('equifitId') + '/forms/' + this.model.id; //$(e.currentTarget).data('slug');
            }
            else {
                url = '/equifit/' + app.store.get('appFlow') + '/forms/' + this.model.id; //$(e.currentTarget).data('slug');
            }

            app.store.set({
                formName: this.model.get('title'),
                formId: this.model.id
            });

            app.router.navigate(url, { trigger: true });
        }
    });


    FormsView = Backbone.View.extend({
        manage: true,
        el: false,
        template: 'forms-list',

        beforeRender: function () {
            this.collection.each(function (item) {
                this.insertView('ul', new Item({
                    model: item
                }));
            }, this);
        }
    });

    module.exports = FormsView;
});