/**
 * Created by mromanoff on 7/24/2014.
 */

define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var backbone = require('backbone');
    var FormsEntities;
    var Model = Backbone.Model.extend({
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