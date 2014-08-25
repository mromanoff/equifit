define(function (require, exports, module) {
    'use strict';

    var msgBus = require('msgbus');
    var ModalView;

    ModalView = Backbone.View.extend({
        manage: true,
        id: 'equifitModal',
        className: 'modal hide fade',
        template: 'modal',

        //initialize: function (){
        //   // console.log('model', this.model);
        //    //this.title = this.model.get('title') || 'Modal';
        //    //this.message = this.model.get('messages') || 'Modal Text going here';
        //},

        events: {
            'click .close': 'closeModal',
            'click .submit': 'updateEquifit'
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
            //this.remove();
        },

        updateEquifit: function (e) {
            e.preventDefault();
            // close previously open modal
            this.closeModal();

            if($(e.currentTarget).data('validate')) {
                console.log('set isValidate to true');
                this.model.set({
                    isValidated: true
                });
            }

            msgBus.trigger('equifit:equifit:update', this.model);
        }
    });

    module.exports = ModalView;
});