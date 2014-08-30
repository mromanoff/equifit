define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');
    var ErrorModule;

    ErrorModule =  Backbone.View.extend({
        manage: true,
        template: 'error',

        initialize: function (){
            console.log('model', this.model);
            this.title = this.model.get('statusText') || 'Error';
            this.text = this.model.get('responseText') || null;
        },

        serialize: function () {
            return {
                title: this.title,
                text: this.text
            };
        }
    });

    module.exports = ErrorModule;
});