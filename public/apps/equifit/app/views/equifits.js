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
            'click': 'viewEquifit'
        },

        serialize: function () {
            var data = this.model.toJSON();
            data.appointmentAt = moment(data.createdAt).format('MMMM D, YYYY');
            data.updatedAt = _.isNull(data.updatedAt) ? null : moment(data.updatedAt).format('MMMM D, YYYY');
            return data;
        },

        printForm: function (e) {
            e.stopPropagation();
            console.log('print form');
        },

        viewEquifit: function (e) {
            e.preventDefault();
            // /equifit/member/{1234}/equifit/{123}
            var url = '/equifit/member/' + app.store.get('memberId') + '/equifit/' + this.model.get('_id');

            app.store.set({
                //title: moment(this.model.get('createdAt')).format('MMMM D, YYYY'),
                appointmentAt: moment(this.model.get('appointmentAt')).format('MMMM D, YYYY'),
                isSigned: this.model.get('isSigned'),
                equifitId: this.model.get('_id')
            });

            app.router.navigate(url, { trigger: true });
        }
    });

    var ItemEmpty = Backbone.View.extend({
        manage: true,
        template: 'equifit-item-empty'
    });

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