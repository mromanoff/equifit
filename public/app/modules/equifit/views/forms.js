define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var FormsCollections;

    var Item = Backbone.View.extend({
        manage: true,
        template: 'equifit/form-item',
        tagName: 'li',

        events: {
            'click .item': 'renderForm'
        },

        initialize: function () {
           // console.log('form item', this.model);
        },

        serialize: function () {
            return this.model.toJSON();
        },

        renderForm: function (e) {
            var url;
            e.preventDefault();
            if (_.isEqual(app.flow, 'edit')) {
                url = '/equifit/' + app.flow + '/' + app.equifitId + '/forms/' + this.model.id; //$(e.currentTarget).data('slug');
            }
            else {
                url = '/equifit/' + app.flow + '/forms/' + this.model.id; //$(e.currentTarget).data('slug');
            }

            console.log('url', url);


            app.store.formName = this.model.get('title');
            app.store.formId = this.model.id;

            app.router.navigate(url, { trigger: true });
        }
    });


    FormsCollections = Backbone.View.extend({
        manage: true,
        el: false,
        template: 'equifit/forms-list',

        beforeRender: function () {
            this.collection.each(function (item) {
                this.insertView('ul', new Item({
                    model: item
                }));
            }, this);
        }
    });

    module.exports = FormsCollections;
});