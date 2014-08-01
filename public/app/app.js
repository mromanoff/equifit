define(function (require, exports, module) {
    "use strict";

    var Backbone = require('backbone');
    require('backbone.layoutmanager');

    // Provide a global location to place configuration settings and module
    // creation.
    var app = {
        // The root path to run the application.
        root: "/",

        store: {
            flow: null      // create, edit, cancel etc.
        }
    };

    // Configure LayoutManager with Backbone Boilerplate defaults.
    Backbone.Layout.configure({
        // Allow | Not Allow LayoutManager to augment Backbone.View.prototype.
        manage: false,
        prefix: "app/templates/",

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
            var Layout = Backbone.Layout.extend({
                el: "#main",
                template: name
            });

            var layout = new Layout();

            // Cache the refererence.
            return this.layout = layout;
        }
    }, Backbone.Events);
});
