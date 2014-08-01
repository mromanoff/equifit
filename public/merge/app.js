define([
    "spin",
    "modules/utilities/nav",
    "modules/utilities/deviceDetection",
    "../bower_components/layoutmanager/backbone.layoutmanager.js",
    "bootstrap"

], function (Spinner, Nav, Device) {
    "use strict";

    // Provide a global location to place configuration settings and module
    // creation.
    var app = {
        // The root path to run the application.
        root: "/",

        nav: Nav.init(),

        omniture: {
            AvailabilityDayScript: function () {
                if (typeof omnitAvailDayScript === 'function') {
                    omnitAvailDayScript();
                }
            },
            AvailabilityMainScript: function () {
                if (typeof omnitAvailMainScript === 'function') {
                    omnitAvailMainScript();
                }
            }
        },

        exceptionHandling: function (err) {
            var message;
            var statusErrorMap = {
                '400': "Server understood the request but request content was invalid.",
                '401': "Unauthorized access.  Please log out and log back in.",
                '403': "Forbidden resource can't be accessed.  Please log out and log back in.",
                '404': "Requested page not found.",
                '500': "Internal Server Error.",
                '503': "Service Unavailable.",
                '502': "Bad Gateway.",
                '504': "Gateway timeout."
            };
            if (err.status) {
                message = statusErrorMap[err.status];
                if (err.status == '401') {
                    alert('Sorry, you have been logged out [probably in another window]. Please log in again.');
                    window.location.href = "/login?returnUrl=" + window.location.href;
                    return null;
                }
                if (!message) {
                    message = "Unknown Error\n";
                }
            } else if (err.statusText == 'parsererror') {
                message = "Error.\nParsing JSON Request failed.";
            } else if (err.statusText == 'timeout') {
                message = "Request Time out.";
            } else if (err.statusText == 'abort') {
                message = "Request was aborted by the server";
            } else {
                message = "Unknown Error\n";
            }
            return message;
        },

        device: Device,
        spinnerInstance: null,

        spinner: function (config) {
            /*
             optional params
             var spinnerConfig = {
             action: "spin",
             target: document.getElementById('main'),
             text: 'Loading...'
             };
             create spinner
             EQUINOX.UTIL.spinner(spinnerConfig);

             destroy spinner
             EQUINOX.UTIL.spinner();
             */

            var opts = {
                lines: 13, // The number of lines to draw
                length: 7, // The length of each line
                width: 2, // The line thickness
                radius: 10, // The radius of the inner circle
                corners: 0, // Corner roundness (0..1)
                rotate: 0, // The rotation offset
                direction: 1, // 1: clockwise, -1: counterclockwise
                color: '#000', // #rgb or #rrggbb
                speed: 1, // Rounds per second
                trail: 52, // Afterglow percentage
                shadow: false, // Whether to render a shadow
                hwaccel: false, // Whether to use hardware acceleration
                className: 'spinner', // The CSS class to assign to the spinner
                zIndex: 2e9, // The z-index (defaults to 2000000000)
                target: document.getElementById('main'),
                text: "Loading...",
                block: true,
                action: 'stop',
                top: $(window).height() / 4 + $(window).scrollTop()
            };

            if (!_.isEmpty(config)) {
                opts = _.extend(opts, config);

                if (_.isNull(this.spinnerInstance)) {
                    this.spinnerInstance = new Spinner(opts);
                }

                if (_.isEqual(opts.action, 'spin')) {
                    this.spinnerInstance.spin(opts.target);
                    $('.' + opts.className).prepend('<div class="spinner-block"><small></small></div>');

                    if (!_.isNull(opts.text)) {
                        $('.' + opts.className).find('small').text(opts.text);
                    }

                    if (_.isEqual(opts.block, true)) {
                        $('<div class="block-view">').appendTo(opts.target);
                    }
                }
            }
            else {
                if (!_.isNull(this.spinnerInstance)) {
                    // stop spinner
                    this.spinnerInstance.stop();
                    // remove spinner instance from memory
                    this.spinnerInstance = null;
                    $(opts.target).find('.block-view').remove();
                }
            }
        },

        store: {
            subApp: null,   // etc. equifit, projections, settings
            flow: null      // create, edit, cancel etc.
        }
    };

    //create spinner
    app.spinner({ action: "spin" });

    // Localize or create a new JavaScript Template object.
    var JST = window.JST = window.JST || {};

    // Configure LayoutManager with Backbone Boilerplate defaults.
    Backbone.Layout.configure({
        // Allow LayoutManager to augment Backbone.View.prototype.
        manage: true,
        prefix: "app/templates/",

        fetch: function (path) {
            // Concatenate the file extension.
            path = path + ".html" + "?ver=" + version;

            // If cached, use the compiled template.
            if (JST[path]) {
                return JST[path];
            }

            // Put fetch into `async-mode`.
            var done = this.async();

            // Seek out the template asynchronously.
            $.get(app.root + path, function (contents) {
                done(JST[path] = _.template(contents));
            });
        }
    });

    // Mix Backbone.Events, modules, and layout management into the app object.
    return _.extend(app, {
        // Create a custom object with a nested Views object.
        module: function (additionalProps) {
            return _.extend({ Views: {} }, additionalProps);
        },

        // Helper for using layouts.
        useLayout: function (name, options) {
            // Enable variable arity by allowing the first argument to be the options
            // object and omitting the name argument.
            if (_.isObject(name)) {
                options = name;
            }

            // Ensure options is an object.
            options = options || {};

            // If a name property was specified use that as the template.
            if (_.isString(name)) {
                options.template = name;
            }

            // Create a new Layout with options.
            var layout = new Backbone.Layout(_.extend({
                el: "#main"
            }, options));

            // Cache the refererence.
            return this.layout = layout;
        }
    }, Backbone.Events);

});
