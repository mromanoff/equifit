define([
        '../../../app'
    ],
    function (app) {
        'use strict';

        var Item =  Backbone.View.extend({
            manage: true,
            template: 'equifit/form-item',
            tagName: 'li',

            events: {
                'click .item': 'renderItemView'
            },

            serialize: function () {
                return this.model.toJSON();
            },

            renderItemView: function (e) {
                var url;
                e.preventDefault();
                if(_.isEqual(app.flow, 'edit')) {
                    url = '/equifit/' + app.flow + '/' + app.equifitId + '/forms/' + $(e.currentTarget).data('slug');
                }
                else {
                    url = '/equifit/' + app.flow + '/forms/' + $  (e.currentTarget).data('slug');
                }

                console.log('url', url);
                app.router.navigate(url, { trigger: true });
            }
        });


        return Backbone.View.extend({
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
    });