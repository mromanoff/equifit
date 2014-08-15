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
            expect(store.get('title')).toBeNull();
            expect(store.get('clientId')).toBeNull();
            expect(store.get('clientName')).toBeNull();
            expect(store.get('appointmentAt')).toBeNull();
            expect(store.get('isSigned')).toBeNull();
            expect(store.get('slug')).toBeNull();
            expect(store.get('formName')).toBeNull();
            expect(store.get('formId')).toBeNull();
        });
    });
});
