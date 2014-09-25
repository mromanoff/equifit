define(function (require, exports, module) {
    'use strict';

    var ModalPromptView = require('views/modal-prompt');
    var ModalConfirmationView = require('views/modal-confirmation');
    var modalModule = {};

    var layout = new Backbone.Layout({
        el: '#modal'
    });

    modalModule.prompt = function (model) {
        layout.setView('', new ModalPromptView({
            model: model
        })).render();
    };


    modalModule.confirmation = function (model) {
        layout.setView('', new ModalConfirmationView({
            model: model
        })).render();
    };


    module.exports = modalModule;
});
