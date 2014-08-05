/**
 * Created by mromanoff on 7/24/2014.
 */

define(function (require, exports, module) {
    "use strict";

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
            return '/apps/equifit/api/forms.json';
            //return '/equifit/api/members/1002209379/equifits/1/documents';
        }
    });

    module.exports = FormsEntities;
});