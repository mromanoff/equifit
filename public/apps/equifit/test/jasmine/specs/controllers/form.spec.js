define(function(require) {
    'use strict';

    var FormModule = require('controllers/form');

    var app = require('app');
    var FormEntities = require('entities/forms');
    var FormView = require('views/form');
    var HeaderView = require('views/header');

    // Test that the Router exists.
    describe('Form Controller Module', function() {

        it('FormModule exists', function() {
            expect(FormModule).toBeTruthy();
            expect(FormModule instanceof Object).toBe(true);
        });

        it('FormsModule has init method', function() {
            expect(FormModule.init).toBeTruthy();
            expect(FormModule.init instanceof Function).toBe(true);
        });

        xit('FormModule set app.store params', function() {
            expect(app.store.get('slug')).toEqual('form');
        });

        describe('FormModule has external dependencies', function () {

            it('app exists', function() {
                expect(app).toBeTruthy();
                expect(app instanceof Object).toBe(true);
            });

            it('FormEntities is a Backbone.Collection', function() {
                expect(FormEntities.prototype instanceof Backbone.Collection).toBe(true);
            });

            it('FormView is a Backbone.View', function() {
                expect(FormView.prototype instanceof Backbone.View).toBe(true);
            });

            it('HeaderView is a Backbone.View', function() {
                expect(HeaderView.prototype instanceof Backbone.View).toBe(true);
            });
        });
    });
});
