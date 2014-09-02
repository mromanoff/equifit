define(function (require, exports, module) {
    'use strict';

    var ModalView;

    ModalView = Backbone.View.extend({
        manage: true,
        id: 'equifitModal',
        className: 'modal hide fade',
        template: 'simple-modal',

        //initialize: function (){
        //   // console.log('model', this.model);
        //    //this.title = this.model.get('title') || 'Modal';
        //    //this.message = this.model.get('messages') || 'Modal Text going here';
        //},

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
        }
    });

    module.exports = ModalView;
});