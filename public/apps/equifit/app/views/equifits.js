define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var moment = require('moment');
    var EquifitsView;

    var Item = Backbone.View.extend({
        manage: true,
        template: 'equifit-item',
        tagName: 'li',

        events: {
            'click .printForm': 'printForm',
            'click': 'getEquifit'
        },

        serialize: function () {
            var data = this.model.toJSON();
            data.appointmentAt = _.isNull(data.appointmentAt) ? 'Equifit date is not set' : moment(data.appointmentAt).format('MMMM D, YYYY');
            data.updatedAt = _.isNull(data.updatedAt) ? null : moment(data.updatedAt).format('MMMM D, YYYY');
            return data;
        },

        printForm: function (e) {
            e.stopPropagation();
            console.log('print form');
        },

        getEquifit: function (e) {
            e.preventDefault();
            // /equifit/member/{1234}/equifit/{123}
            var url = '/equifit/client/' + app.store.get('clientId') + '/equifit/' + this.model.get('_id');

            // udpate store model
            msgBus.trigger('equifit:store:update', {
                appointmentAt: moment(this.model.get('appointmentAt')).format('MMMM D, YYYY'),

                //TODO it gets overwriten
                //title: moment(this.model.get('appointmentAt')).format('MMMM D, YYYY'),
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