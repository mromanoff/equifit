define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');
    var ErrorModule;

    ErrorModule =  Backbone.View.extend({
        manage: true,
        template: 'error',

        initialize: function (){
            console.log('Error in the view ', this.model.toJSON());
            this.title = this.model.get('statusText') || 'Error';
            this.status = this.model.get('status') || null;
            this.message = this.model.get('responseJSON').message || null;
        },

        serialize: function () {
            return {
                title: this.title,
                status: this.status,
                message: this.message
            };
        }
    });

    module.exports = ErrorModule;
});