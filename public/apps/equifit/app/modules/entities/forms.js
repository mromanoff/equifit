define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var Backbone = require('backbone');
    var FormsEntities;
    var Model = Backbone.Model.extend({
        idAttribute: '_id',

        defaults: {
            id: null,
            title: null,
            description: null,
            slug: null,
            complete: false
        }
    });

    FormsEntities = Backbone.Collection.extend({
        model: Model,
        url: function () {
            //return '/apps/equifit/api/forms.json';
            return '/equifit/api/members/' + app.store.get('memberId') + '/equifits/' + app.store.get('equifitId') + '/documents';
        }
    });

    module.exports = FormsEntities;
});