define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var ModalView;

    ModalView = Backbone.View.extend({
        manage: true,
        id: 'myModal',
        className: 'modal hide fade',
        //el: false,
        template: 'modal',

        initialize: function (opt){
            var options = _.extend({}, opt);
            this.title = options.title || 'Modal';
            this.message = options.message || 'Modal Text going here';
        },

        events: {
            'click .close': 'closeModal'
        },

        serialize: function () {
            return this.options;
        },

        afterRender: function () {
          this.$el.modal({
              backdrop: false
          });
        },

        closeModal: function () {
            this.$el.modal('hide');
            this.remove();
        }
    });

    module.exports = ModalView;
});