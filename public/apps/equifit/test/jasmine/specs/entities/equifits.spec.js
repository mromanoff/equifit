define(function(require) {
    "use strict";

    var app = require('app');
    var Backbone = require('backbone');

    var EquifitEntity = Backbone.Model.extend();
    var EquifitEntities = Backbone.Collection.extend();

    // Test that the Router exists.
    describe("Equifits Entities", function() {
        it("app exists", function() {
            expect(app).toBeTruthy();
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

        it("is a Backbone.Model", function() {
            expect(EquifitEntity.prototype instanceof Backbone.Model).toBe(true);
        });

        it("is a Backbone.Collection", function() {
            expect(EquifitEntities.prototype instanceof Backbone.Collection).toBe(true);
        });
    });
});
