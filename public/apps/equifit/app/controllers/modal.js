define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var ModalView = require('views/modal');
    var modalModule = {};

    modalModule.init = function (options) {
        var layout = new Backbone.Layout();
        //layout.insertView("#modal", new ModalView(options)).render();
        layout.setView('body', new ModalView(options), true).render();
    };

    module.exports = modalModule;
});
