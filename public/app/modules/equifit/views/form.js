define([
        '../../../app',
        'jquery',
        '../../../bower_components/lodash/dist/lodash.underscore',
        'backbone',
        'backbone-forms',
        'backbone-forms-templates'
    ],
    function (app, $, _, Backbone) {
        'use strict';


//        return Backbone.View.extend({
//            manage: false,
//            el: false,
//            template: 'equifit/forms-list',
//
//            initialize: function () {
//                console.log('form model', this.model);
//            },
//
//            beforeRender: function () {
//
//            }
//        });

        return Backbone.Form({
            manage: false,

            initialize: function(options) {
                this.options = options;
                console.log('in forms view');
            }
        });
    });