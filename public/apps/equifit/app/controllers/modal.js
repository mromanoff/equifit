define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var ModalView = require('views/modal');
    var modalModule = {};

    modalModule.init = function (model) {
        var layout = new Backbone.Layout({
            el: "#modal"
        });

        layout.setView('', new ModalView({
            model: model
        })).render();

    };

    module.exports = modalModule;
});
