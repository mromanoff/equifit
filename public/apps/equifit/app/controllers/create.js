define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var moment =  require('moment');
    //var EquifitEntity = require('entities/equifit');
    var EquifitEntities = require('entities/equifits');
    var url;
    var Create = {};

    //var equifitEntity =  new EquifitEntity();


    var equifitEntities = new EquifitEntities();

//    equifitEntities.model.set({
//        createdAt: moment()
//    });

    Create.init = function (equifitId, formId) {

        equifitEntities.create(equifitEntities.model, {
            // waits for server to respond with 200
            // before adding newly created model to collection
            wait : true,

            success : function(response){
                console.log('success callback', response);
                url = '/equifit/' + response.id;
                app.router.navigate(url, { trigger: true });
            },
            error : function(err) {
                console.log('ERROR: can\'t create new forms', err);

                url = '/equifit/error';
                app.router.navigate(url, { trigger: true });
            }
        });
    };

    module.exports = Create;
});
