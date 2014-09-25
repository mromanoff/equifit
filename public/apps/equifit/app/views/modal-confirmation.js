define(function (require, exports, module) {
    'use strict';

    var ModalView;

    ModalView = Backbone.View.extend({
        manage: true,
        id: 'equifitModal',
        className: 'modal hide fade',
        template: 'modal-confirmation',

        events: {
            'click .close': 'closeModal'
        },

        serialize: function () {
            return this.model.toJSON();
        },

        afterRender: function () {
            this.$el.modal();
        },

        closeModal: function () {
            $('.modal-backdrop').remove();
            //this.$el.modal('hide');
            this.remove();
        }
    });

    module.exports = ModalView;
});