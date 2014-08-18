define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var EquifitEntity;

    EquifitEntity = Backbone.Model.extend({
        idAttribute: '_id',

        defaults: {
            appointmentAt: null,
            updatedAt: null,
            trainerName: null,
            trainerFacility: null,
            clientId: null,
            clientName: null,
            isSigned: false,
            isValidated: false,
            documents: null
        }
//        ,
//
//        save: function () {
//            console.log('model save method');
//        }
    });

    module.exports = EquifitEntity;
});
