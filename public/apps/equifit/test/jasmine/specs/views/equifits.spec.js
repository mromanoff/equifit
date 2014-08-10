define(function(require) {
    'use strict';

    var EquifitsViewModule = require('views/equifits');

    var app = require('app');
    var moment = require('moment');

    // Test that the Router exists.
    describe("Equifits View Module", function() {

        it("EquifitsViewModule exists", function() {
            expect(EquifitsViewModule).toBeTruthy();
            expect(EquifitsViewModule instanceof Object).toBe(true);
            expect(EquifitsViewModule.prototype instanceof Backbone.View).toBe(true);
        });

        describe('EquifitsViewModule has external dependencies', function () {

            it("app exists", function() {
                expect(app).toBeTruthy();
                expect(app instanceof Object).toBe(true);
            });

            it("Moment JS exists", function() {
                expect(moment).toBeTruthy();
            });


        });
    });
});
