define(function(require) {
    'use strict';

    var FormEntity = require('entities/form');
    var form = new FormEntity();

    // Test that the Router exists.
    describe('Form Entity Model', function() {

        it('should exist', function(){
            expect(FormEntity).toBeDefined();
            expect(FormEntity.prototype instanceof Backbone.Model).toBe(true);
        });

        it('should have certain defaults', function(){
            expect(form.get('title')).toBeNull();
            expect(form.get('templateId')).toBeNull();
            expect(form.get('templateType')).toBeNull();
            expect(form.get('totalQuestions')).toBeNull();
            expect(form.get('totalCompletedQuestions')).toBeNull();
            expect(form.get('schema')).toBeNull();
            expect(form.get('fieldsets')).toBeNull();
            expect(form.get('data')).toBeNull();
        });

        it('should have parse method', function(){
            expect(form.parse).toBeDefined();
        });

        it('parse method return object value', function() {
            expect(form.parse({})).toEqual(jasmine.any(Object));
        });

    });
});
