define(function (require, exports, module) {
    "use strict";

    var Backbone = require('backbone');
    var Layout = require('backbone.layoutmanager');
    var moment = require('moment');


    // Provide a global location to place configuration settings and module
    // creation.
    var app = {
        // The root path to run the application.
        root: '/',
        store: require('./modules/entities/store')
    };

    // set store with initial data
    app.store.set({
        flow: null,      // create, edit, cancel etc.
        memberName: window.equifitData.memberName || null,
        memberId: window.equifitData.memberId || null,
        equifitDate: moment().format('MMMM D, YYYY'),
        formName: null,
        formId: null
    });

    // Configure LayoutManager with Backbone Boilerplate defaults.
    Layout.configure({
        // Allow | Not Allow LayoutManager to augment Backbone.View.prototype.
        manage: false,
        prefix: "apps/equifit/app/templates/",

        fetchTemplate: function (path) {
            // Concatenate the file extension.
            path = path + ".html";

            window.JST = window.JST || {};

            // If cached, use the compiled template.
            if (window.JST[path]) {
                return window.JST[path];
            }

            // Put fetch into `async-mode`.
            var done = this.async();

            // Seek out the template asynchronously.
            $.get(app.root + path, function (contents) {
                done(window.JST[path] = _.template(contents));
            });
        }
    });

    // Mix Backbone.Events, modules, and layout management into the app object.
    module.exports = _.extend(app, {
        // Helper for using layouts.
        useLayout: function (name) {
            var layout = new Backbone.Layout({
                el: "#main",
                template: name
            });

            // Cache the refererence.
            this.layout =  layout;
            return layout;
        }
    }, Backbone.Events);
});
