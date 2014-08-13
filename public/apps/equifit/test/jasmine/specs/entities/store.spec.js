define(function(require) {
    'use strict';

    var Store = require('entities/store');
    var store = new Store();

    describe("Store Entity Model", function() {
        it('should exist', function(){
            expect(Store).toBeDefined();
            expect(Store.prototype instanceof Backbone.Model).toBe(true);
        });

        it('should have certain defaults', function(){
            expect(store.get('slug')).toBeNull();
            expect(store.get('pageTitle')).toBeNull();
            expect(store.get('memberName')).toBeNull();
            expect(store.get('memberId')).toBeNull();
            expect(store.get('equifitDate')).toBeNull();
            expect(store.get('formName')).toBeNull();
            expect(store.get('formId')).toBeNull();
            expect(store.get('isSigned')).toBeNull();
        });
    });
});
