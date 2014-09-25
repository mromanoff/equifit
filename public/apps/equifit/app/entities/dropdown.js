define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');
    var Entities = {};

    Entities.Item = Backbone.Model.extend({
        defaults: {
            title: null,
            _id: null,
            templateId: null
        }
    });

    module.exports = Entities.Collection = Backbone.Model.extend({
        model: Entities.Item
    });
});
