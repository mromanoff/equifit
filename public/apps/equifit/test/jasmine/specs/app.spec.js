define(function(require) {
    "use strict";

    var app = require('app');
    var Backbone = require('backbone');
    var Layout = require('backbone.layoutmanager');
    var Store = require('entities/store');
    var moment = require('moment');
    var bootstrap = require('bootstrap');

    // Test that the Router exists.
    describe("Application", function() {
        it("app exists", function() {
            expect(app).toBeTruthy();
        });

        it("Backbone exists", function() {
            expect(Backbone).toBeTruthy();
        });

        it("Layout Manager exists", function() {
            expect(Layout).toBeTruthy();
        });

        it("Store exists", function() {
            expect(Store).toBeTruthy();
        });

        it("Layout Configure exists", function() {
            expect(Layout.configure).toBeTruthy();
        });

        it("Moment JS exists", function() {
            expect(moment).toBeTruthy();
        });

        it('useLayout exists', function () {
            expect(app.useLayout).toBeTruthy();
        });

        it('Backbone.Events exists', function () {
            expect(Backbone.Events).toBeTruthy();
        });
    });
});
