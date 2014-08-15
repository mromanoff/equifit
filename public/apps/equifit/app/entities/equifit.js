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
            clubName: null,
            memberId: null,
            memberName: null,
            isSigned: false,
            isValidated: false,
            documents: null
        }
    });

    module.exports = EquifitEntity;
});
