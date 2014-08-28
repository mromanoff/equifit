define(function(require) {
    'use strict';

    var EquifitModule = require('controllers/equifit');

    var app = require('app');
    var FormsEntities = require('entities/forms');
    var EquifitView = require('views/equifit');
    var HeaderView = require('views/header');

    // Test that the Router exists.
    describe('Forms Controller Module', function() {

        it('EquifitModule exists', function() {
            expect(EquifitModule).toBeTruthy();
            expect(EquifitModule instanceof Object).toBe(true);
        });

        it('EquifitModule has init method', function() {
            expect(EquifitModule.init).toBeTruthy();
            expect(EquifitModule.init instanceof Function).toBe(true);
        });

        xit('EquifitModule set app.store params', function() {
            expect(app.store.get('pageTitle')).toEqual('Equifits Forms');
        });

        describe('EquifitModule has external dependencies', function () {

            it('app exists', function() {
                expect(app).toBeTruthy();
                expect(app instanceof Object).toBe(true);
            });

            it('FormsEntities is a Backbone.Collection', function() {
                expect(FormsEntities.prototype instanceof Backbone.Collection).toBe(true);
            });

            it('FormsView is a Backbone.View', function() {
                expect(EquifitView.prototype instanceof Backbone.View).toBe(true);
            });

            it('HeaderView is a Backbone.View', function() {
                expect(HeaderView.prototype instanceof Backbone.View).toBe(true);
            });
        });
    });
});
