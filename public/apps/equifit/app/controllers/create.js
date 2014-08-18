define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var EquifitEntities = require('entities/equifits');
    var url;
    var createModule = {};

    var equifitEntities = new EquifitEntities();

    createModule.init = function () {
        equifitEntities.create({clientId: app.store.get('clientId')}, {
            // waits for server to respond with 200
            // before adding newly created model to collection
            wait : true,
            success : function(model){
                console.log('success callback', model);
                url = '/equifit/client/' + app.store.get('clientId') + '/equifit/' + model.id;
                app.router.navigate(url, { trigger: true });
            },
            error : function(err) {
                console.log('ERROR: can\'t create new forms', err);

                url = '/equifit/error';
                app.router.navigate(url, { trigger: true });
            }
        });
    };

    module.exports = createModule;
});
