define(function(require) {
    'use strict';

    var FormsModule = require('controllers/forms');

    var app = require('app');
    var FormsEntities = require('entities/forms');
    var FormsView = require('views/forms');
    var HeaderView = require('views/header');
    var BreadcrumbView = require('views/breadcrumb');

    // Test that the Router exists.
    describe("Forms Controller Module", function() {

        it("FormsModule exists", function() {
            expect(FormsModule).toBeTruthy();
            expect(FormsModule instanceof Object).toBe(true);
        });

        it("FormsModule has init method", function() {
            expect(FormsModule.init).toBeTruthy();
            expect(FormsModule.init instanceof Function).toBe(true);
        });

        xit("FormsModule set app.store params", function() {
            expect(app.store.get('pageTitle')).toEqual('Equifits Forms');
            expect(app.store.get('slug')).toEqual('forms');
        });

        describe('FormsModule has external dependencies', function () {

            it("app exists", function() {
                expect(app).toBeTruthy();
                expect(app instanceof Object).toBe(true);
            });

            it("FormsEntities is a Backbone.Collection", function() {
                expect(FormsEntities.prototype instanceof Backbone.Collection).toBe(true);
            });

            it("FormsView is a Backbone.View", function() {
                expect(FormsView.prototype instanceof Backbone.View).toBe(true);
            });

            it("HeaderView is a Backbone.View", function() {
                expect(HeaderView.prototype instanceof Backbone.View).toBe(true);
            });

            it("BreadcrumbView is a Backbone.View", function() {
                expect(BreadcrumbView.prototype instanceof Backbone.View).toBe(true);
            });
        });
    });
});
