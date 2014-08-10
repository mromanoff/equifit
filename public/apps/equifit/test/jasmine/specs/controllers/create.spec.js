define(function(require) {
    'use strict';

    var CreateModule = require('controllers/create');

    var app = require('app');
    var EquifitEntities = require('entities/equifits');

    // Test that the Router exists.
    describe("Create Controller Module", function() {

        it("CreateModule exists", function() {
            expect(CreateModule).toBeTruthy();
            expect(CreateModule instanceof Object).toBe(true);
        });

        it("CreateModule has init method", function() {
            expect(CreateModule.init).toBeTruthy();
            expect(CreateModule.init instanceof Function).toBe(true);
        });

        describe('CreateModule has external dependencies', function () {

            it("app exists", function() {
                expect(app).toBeTruthy();
                expect(app instanceof Object).toBe(true);
            });

            it("EquifitEntities is a Backbone.Collection", function() {
                expect(EquifitEntities.prototype instanceof Backbone.Collection).toBe(true);
            });
        });
    });
});
