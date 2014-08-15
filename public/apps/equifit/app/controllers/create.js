define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var EquifitEntities = require('entities/equifits');
    var url;
    var CreateModule = {};

    var equifitEntities = new EquifitEntities();

    CreateModule.init = function () {
        console.log('create init');


        equifitEntities.create(equifitEntities.model, {
            // waits for server to respond with 200
            // before adding newly created model to collection
            wait : true,
            success : function(model){
                console.log('success callback', model);
                url = '/equifit/member/' + app.store.get('memberId') + '/equifit/' + model.id;
                app.router.navigate(url, { trigger: true });
            },
            error : function(err) {
                console.log('ERROR: can\'t create new forms', err);

                url = '/equifit/error';
                app.router.navigate(url, { trigger: true });
            }
        });
    };

    module.exports = CreateModule;
});
