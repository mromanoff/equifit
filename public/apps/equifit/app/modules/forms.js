define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var FormsEntities = require('./entities/forms');
    var FormsView = require('./views/forms');
    var Equifit = {};

    /// create an instance of forms collection.
    var forms = new FormsEntities();

    Equifit.Layout = Backbone.Layout.extend({
        template: 'forms',

        serialize: function () {
            return this.model;
        }
    });

    // render layout
    Equifit.init = function () {
        // Fetch data
        forms.fetch().then(
            function () {
                app.useLayout('layouts/main').setViews({
                    '#content': new Equifit.Layout({
                        id: 'equifit',
                        model: {
                            memberName: app.store.memberName,
                            memberId: app.store.memberId,
                            equifitId: app.store.equifitId,
                            date: app.store.equifitDate,
                            formName: app.store.formName,
                            formId: app.store.formId
                        },
                        
                        views: {
                            '.container': new FormsView({
                                collection: forms
                            })
                        }
                    })
                }).render();
                $('title').html('Equifit');
            },
            function (err) {
                var message = app.exceptionHandling(err);
                console.log('ERROR: ', err);
                app.useLayout('layouts/main').setViews({
                    '#content': new Messages.Views.Warning({
                        model: {
                            type: 'alert-error',
                            code: 'Sorry, ',
                            text: message
                        }
                    })
                }).render();
            }
        );
    };

    module.exports = Equifit;
});