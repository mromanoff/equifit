define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');
    var DropdownModule;

    DropdownModule =  Backbone.View.extend({
        manage: true,
        template: 'dropdown',

        initialize: function (){
            //console.log('Error dropdown ', this.model.toJSON());
        },

        serialize: function () {
            return this.model.toJSON();
        }
    });

    module.exports = DropdownModule;
});