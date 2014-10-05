define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var Backbone = require('backbone');
    var BreadCrumbModule;

    BreadCrumbModule =  Backbone.View.extend({
        manage: true,
        template: 'breadcrumb',
        className: 'breadcrumb',
        tagName: 'ul',

        events: {
            'click .submit': 'updateEquifit',
            'click .show-equifits': 'showEquifits',
            'click .show-equifit': 'showEquifit'
        },

        showEquifits: function (e) {
            e.preventDefault();
            var url = 'client/' + app.store.get('clientId');
            msgBus.commands.execute('equifits:get', app.store.get('clientId'));
            app.router.navigate(url);
        },

        showEquifit: function (e) {
            e.preventDefault();
            var url = 'client/' + app.store.get('clientId') + '/equifit/' + app.store.get('equifitId');
            msgBus.commands.execute('equifit:get', app.store.get('equifitId'));
            app.router.navigate(url);
        },

        serialize: function () {
            return _.extend({}, this.model.toJSON(), app.store.toJSON());
        }
    });

    module.exports = BreadCrumbModule;
});