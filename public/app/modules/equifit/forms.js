define(function (require, exports, module) {
    "use strict";

    var app = require('app');
    var FormsEntities = require('./entities/forms');
    var FormsView = require('./views/forms');
    var Equifit = {};

    /// create an instance of forms collection.
    var forms = new FormsEntities();

    Equifit.Layout = Backbone.Layout.extend({
        template: 'equifit/forms'
    });

    // render layout
    Equifit.init = function () {
        // Fetch data
        forms.fetch().then(
            function () {
                app.useLayout('layouts/main').setViews({
                    '#content': new Equifit.Layout({
                        id: 'equifit',
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