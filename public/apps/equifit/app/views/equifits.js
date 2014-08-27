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
            'click': 'showEquifit'
        },

        serialize: function () {
            var data = this.model.toJSON();
            data.appointmentAt = _.isNull(data.appointmentAt) ? 'Equifit date is not set' : moment(data.appointmentAt).format('MMMM D, YYYY');
            data.updatedAt = _.isNull(data.updatedAt) ? null : moment(data.updatedAt).format('MMMM D, YYYY');
            return data;
        },

        /***
         * print form
         * @param e
         */
        printForm: function (e) {
            e.stopPropagation();
            console.log('print form');
        },

        /***
         * show Equifit page
         * @param e
         */
        showEquifit: function (e) {
            e.preventDefault();
            var url = 'client/' + app.store.get('clientId') + '/equifit/' + this.model.id;

            /***
             * update store model
             */
            msgBus.trigger('equifit:store:update', {
                equifitName: _.isNull(this.model.get('appointmentAt')) ? 'Equifit' : moment(this.model.get('appointmentAt')).format('MMMM D, YYYY'),
                isSigned: this.model.get('isSigned'),
                equifitId: this.model.id
            });

            app.router.navigate(url, {trigger: true});
        }
    });

    var ItemEmpty = Backbone.View.extend({
        manage: true,
        template: 'equifit-item-empty'
    });

    EquifitsView = Backbone.Layout.extend({
        template: 'equifits',

        events: {
            'click .createNew': 'createNew',
            'click .printBlankForm': 'printForm'
        },

        printForm: function (e) {
            e.preventDefault();
            window.location.href = '/apps/equifit/assets/files/equifit-forms.pdf';
        },

        createNew: function (e) {
            e.preventDefault();
            msgBus.trigger('equifit:equifit:create', app.store.get('clientId'));
        },

        beforeRender: function () {
            // check if there is no items in collection
            if (_.isEqual(_.size(this.collection), 0)) {
                this.insertView('.list', new ItemEmpty());
            } else {
                this.collection.each(function (item) {
                    this.insertView('.list', new Item({
                        model: item
                    }));
                }, this);
            }
        },

        serialize: function () {
            return app.store.toJSON();
        }
    });

    module.exports = EquifitsView;
});