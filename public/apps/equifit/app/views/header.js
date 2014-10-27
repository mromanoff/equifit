define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');
    var moment = require('moment');
    var HeaderViewModule;

    HeaderViewModule =  Backbone.View.extend({
        manage: true,
        className: 'container',
        template: 'header',

        initialize: function () {
            //console.log('this model', this.model.toJSON());
        },

        serialize: function () {
            return {
                pageTitle: this.model.get('pageTitle'),
                updatedAt: _.isNull(this.model.get('updatedAt')) ? null : moment(this.model.get('updatedAt')).format('MMMM D, YYYY h:mm:ss a')
            };
        }
    });

    module.exports = HeaderViewModule;
});
