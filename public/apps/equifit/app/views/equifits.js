define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var moment = require('moment');
    var EquifitsView;

    var Item = Backbone.View.extend({
        manage: true,
        template: 'equifit-item',
        tagName: 'li',

        events: {
            'click .printForm': 'printForm',
            'click .viewClientReport': 'viewClientReport',
            'click .submit': 'viewEquifit'
        },

        serialize: function () {
            var data = this.model.toJSON();
            data.createdAt = moment(data.createdAt).format('MMMM D, YYYY');
            data.updatedAt = _.isNull(data.updatedAt) ? null : moment(data.updatedAt).format('MMMM D, YYYY');
            return data;
        },

        printForm: function (e) {
            e.preventDefault();
            console.log('print form');
            alert('print form');
        },

        viewClientReport: function (e) {
            e.preventDefault();
            console.log('view client report');
            alert('view client report');
        },

        viewEquifit: function (e) {
            e.preventDefault();
            var url = '/equifit/' + this.model.id;

            app.store.set({
                equifitDate: moment(this.model.get('createdAt')).format('MMMM D, YYYY'),
                equifitId: this.model.id
            });

            app.router.navigate(url, { trigger: true });
        }
    });

    var ItemEmpty = Backbone.View.extend({
        manage: true,
        template: 'equifit-item-empty'
    }),

    EquifitsView = Backbone.View.extend({
        manage: true,
        el: false,
        template: 'equifits-list',

        beforeRender: function () {
            // check if there is no items in collection
            if(_.isEqual(_.size(this.collection), 0)) {
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

    module.exports = EquifitsView;
});