define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var store = require('../entities/store');
    var FormsCollections;

    var Item = Backbone.View.extend({
        manage: true,
        template: 'form-item',
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


            store.set({
                formName: this.model.get('title'),
                formId: this.model.id
            });

            app.router.navigate(url, { trigger: true });
        }
    });


    FormsCollections = Backbone.View.extend({
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

    module.exports = FormsCollections;
});