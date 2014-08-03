// Form Model

define(function (require, exports, module) {
    "use strict";

    var Form = Backbone.Model.extend({
        url: function () {
            return '/app/mocks/equifit/form.json';
        }
    });

    module.exports = Form;
});