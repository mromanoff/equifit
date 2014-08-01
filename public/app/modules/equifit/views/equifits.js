define([
        '../../../app',
        'moment'
    ],

// Map dependencies from above array.
    function (app, moment) {
        'use strict';

        var Item =  Backbone.View.extend({
            manage: true,
            template: 'equifit/equifit-item',
            tagName: 'li',

            events: {
                'click .printForm': 'printForm',
                'click .viewClientReport': 'viewClientReport',
                'click .submit': 'viewEquifit'
            },

            serialize: function () {
                var data = this.model.toJSON();
                data.createdAt = moment(data.createdAt).format('MMMM D, YYYY');
                data.updatedAt = moment(data.updatedAt).format('MMMM D, YYYY');
                return data;
            },

            printForm: function (e) {
                e.preventDefault();
                console.log('print form');
                alert('print form');
            },

            viewClientReport: function (e){
                e.preventDefault();
                console.log('view client report');
                alert('view client report');
            },

            viewEquifit: function (e) {
                e.preventDefault();
                var url = '/equifit/edit/' + this.model.id;
                app.router.navigate(url, { trigger: true });
            }

        });

        return Backbone.View.extend({
            manage: true,
            el: false,
            template: 'equifit/equifits-list',

            beforeRender: function () {
                this.collection.each(function (item) {
                    this.insertView('ul', new Item({
                        model: item
                    }));
                }, this);
            }
        });
    });