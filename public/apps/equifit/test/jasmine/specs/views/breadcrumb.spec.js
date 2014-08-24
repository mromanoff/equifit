define(function(require) {
    'use strict';

    var BreadcrumbViewModule = require('views/breadcrumb');

    var app = require('app');
    var Backbone = require('backbone');

    // Test that the Router exists.
    describe('Breadcrumb View Module', function() {

        it('BreadcrumbViewModule exists', function() {
            expect(BreadcrumbViewModule).toBeTruthy();
            expect(BreadcrumbViewModule instanceof Object).toBe(true);
            expect(BreadcrumbViewModule.prototype instanceof Backbone.View).toBe(true);
        });

        describe('HeaderViewModule has external dependencies', function () {

            it('app exists', function() {
                expect(app).toBeTruthy();
                expect(app instanceof Object).toBe(true);
            });

            it('Backbone exists', function() {
                expect(Backbone).toBeTruthy();
            });
        });
    });
});
