define(function(require) {
    'use strict';

    var ActionViewModule = require('views/action');

    var app = require('app');
    var Backbone = require('backbone');

    // Test that the Router exists.
    describe('Action View Module', function() {

        it('ActionViewModule exists', function() {
            expect(ActionViewModule).toBeTruthy();
            expect(ActionViewModule instanceof Object).toBe(true);
            expect(ActionViewModule.prototype instanceof Backbone.View).toBe(true);
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
