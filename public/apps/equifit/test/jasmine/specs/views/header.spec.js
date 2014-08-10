define(function(require) {
    'use strict';

    var HeaderViewModule = require('views/header');

    var app = require('app');
    var Backbone = require('backbone');

    // Test that the Router exists.
    describe("Header View Module", function() {

        it("HeaderViewModule exists", function() {
            expect(HeaderViewModule).toBeTruthy();
            expect(HeaderViewModule instanceof Object).toBe(true);
            expect(HeaderViewModule.prototype instanceof Backbone.View).toBe(true);
        });

        describe('HeaderViewModule has external dependencies', function () {

            it("app exists", function() {
                expect(app).toBeTruthy();
                expect(app instanceof Object).toBe(true);
            });

            it("Backbone exists", function() {
                expect(Backbone).toBeTruthy();
            });
        });
    });
});
