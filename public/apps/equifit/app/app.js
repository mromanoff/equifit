define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');
    var Layout = require('backbone.layoutmanager');
    var moment = require('moment');


    // Provide a global location to place configuration settings and module
    // creation.
    var app = {
        // The root path to run the application.
        root: '/apps/equifit/',
        store: require('./entities/store'),
        equifitData: window.equifitData || {}
    };

    // set store with initial data
    app.store.set({
        memberName: app.equifitData.memberName || null,
        memberId: app.equifitData.memberId || null,
        equifitDate: moment().format('MMMM D, YYYY')
    });

    // Configure LayoutManager with Backbone Boilerplate defaults.
    Layout.configure({
        // Allow | Not Allow LayoutManager to augment Backbone.View.prototype.
        manage: false,

        // Set the prefix to where your templates live on the server, but keep in
        // mind that this prefix needs to match what your production paths will be.
        // Typically those are relative.  So we'll add the leading `/` in `fetch`.
        prefix: 'app/templates/',

        // This method will check for prebuilt templates first and fall back to
        // loading in via AJAX.
        fetchTemplate: function(path) {
            // Check for a global JST object.  When you build your templates for
            // production, ensure they are all attached here.
            var JST = window.JST || {};
            // Concatenate the file extension.
            path = path + ".html";

            // If the path exists in the object, use it instead of fetching remotely.
            if (JST[path]) {
                return JST[path];
            }

            // If it does not exist in the JST object, mark this function as
            // asynchronous.
            var done = this.async();

            // Fetch via jQuery's GET.  The third argument specifies the dataType.
            $.get(app.root + path, function(contents) {
                // Assuming you're using underscore templates, the compile step here is
                // `_.template`.
                done(_.template(contents));
            }, 'text');
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
