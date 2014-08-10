define(function(require) {
    'use strict';

    var EquifitsModule = require('controllers/equifits');

    var app = require('app');
    var EquifitEntities = require('entities/equifits');
    var EquifitView = require('views/equifits');
    var HeaderView = require('views/header');
    var BreadcrumbView = require('views/breadcrumb');
    var ActionView = require('views/action');

    // Test that the Router exists.
    describe("Equifits Controller Module", function() {

        it("EquifitsModule exists", function() {
            expect(EquifitsModule).toBeTruthy();
            expect(EquifitsModule instanceof Object).toBe(true);
        });

        it("EquifitsModule has init method", function() {
            expect(EquifitsModule.init).toBeTruthy();
            expect(EquifitsModule.init instanceof Function).toBe(true);
        });

        xit("EquifitsModule set app.store params", function() {
            expect(app.store.get('pageTitle')).toEqual('Equifits');
            expect(app.store.get('slug')).toEqual('equifit');
        });

        describe('EquifitsModule has external dependencies', function () {
            it("app exists", function() {
                expect(app).toBeTruthy();
                expect(app instanceof Object).toBe(true);
            });

            it("EquifitEntities is a Backbone.Collection", function() {
                expect(EquifitEntities.prototype instanceof Backbone.Collection).toBe(true);
            });

            it("EquifitView is a Backbone.View", function() {
                expect(EquifitView.prototype instanceof Backbone.View).toBe(true);
            });

            it("HeaderView is a Backbone.View", function() {
                expect(HeaderView.prototype instanceof Backbone.View).toBe(true);
            });

            it("BreadcrumbView is a Backbone.View", function() {
                expect(BreadcrumbView.prototype instanceof Backbone.View).toBe(true);
            });

            it("ActionView is a Backbone.View", function() {
                expect(ActionView.prototype instanceof Backbone.View).toBe(true);
            });

            it("EquifitsModule exists", function() {
                expect(EquifitsModule).toBeTruthy();
                expect(EquifitsModule instanceof Object).toBe(true);
            });
        });
    });
});
