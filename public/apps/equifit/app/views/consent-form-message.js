define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var Backbone = require('backbone');

    module.exports = Backbone.Layout.extend({
        className: 'consent-form-message',
        template: 'consent-form-message',

        events: {
            'click .show-form': 'showForm'
        },

        serialize: function () {
            return {
                status: 'alert-error',
                text: 'The consent form is not signed'
            }
        },

        showForm: function (e) {
            e.preventDefault();
            var form = _.findWhere(app.store.get('documents'), {templateType: 'InformedConsent'});
            msgBus.commands.execute('form:show', form);
        }
    });
});