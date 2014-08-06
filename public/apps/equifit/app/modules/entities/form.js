define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');

    var FormEntity = Backbone.Model.extend({
        idAttribute: '_id'
    });

    module.exports = FormEntity;
});