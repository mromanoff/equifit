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
            'click': 'showEquifit'
        },

        serialize: function () {
            var data = this.model.toJSON();
            data.appointmentAt = _.isNull(data.appointmentAt) ? 'Equifit date is not set' : moment(data.appointmentAt).format('MMMM D, YYYY');
            data.updatedAt = _.isNull(data.updatedAt) ? null : moment(data.updatedAt).format('MMMM D, YYYY');
            return data;
        },

        /***
         * show Equifit page
         * @param e
         */
        showEquifit: function (e) {
            e.preventDefault();
            msgBus.commands.execute('equifit:get', this.model.id);
            app.router.navigate('client/' + this.model.get('clientId') + '/equifit/' + this.model.id);
        }
    });

    var ItemEmpty = Backbone.View.extend({
        manage: true,
        template: 'equifit-item-empty'
    });

    EquifitsView = Backbone.Layout.extend({
        template: 'equifits',

        events: {
            'click .createNew': 'createEquifit',
            'click .printBlankForm': 'printForm'
        },

        initialize: function () {
            msgBus.commands.execute('scroll:top');
        },

        printForm: function (e) {
            e.preventDefault();
            window.location.href = '/apps/equifit/assets/files/equifit-forms.pdf';
        },

        createEquifit: function (e) {
            e.preventDefault();
            msgBus.commands.execute('equifit:create');
        },

        beforeRender: function () {
            // check if there is no items in collection
            //if (_.isEqual(_.size(this.collection), 0)) {
            //    this.insertView('.list', new ItemEmpty());
            //} else {
            //    this.collection.each(function (item) {
            //        this.insertView('.list', new Item({
            //            model: item
            //        }));
            //    }, this);
            //}

            // or check if there is id
            //if (_.isEqual(_.size(this.collection), 0)) {
            //    this.insertView('.list', new ItemEmpty());
            //} else {
                this.collection.each(function (item) {
                    if(item.has('_id')) {
                        this.insertView('.list', new Item({
                            model: item
                        }));
                    } else {
                        this.insertView('.list', new ItemEmpty());
                    }
                }, this);
           // }
        },

        serialize: function () {
            return app.store.toJSON();
        }
    });

    module.exports = EquifitsView;
});