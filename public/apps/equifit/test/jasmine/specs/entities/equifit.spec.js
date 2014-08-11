define(function(require) {
    "use strict";

    var EquifitEntity = require('entities/equifit');

    // Test that the Router exists.
    describe("Equifit Entity Model", function() {

        it('should exist', function(){
            expect(EquifitEntity).toBeDefined();
            expect(EquifitEntity.prototype instanceof Backbone.Model).toBe(true);
        });

        it('should have certain defaults', function(){
            var equifit = new EquifitEntity;
            expect(equifit.get('id')).toBeNull();
            expect(equifit.get('createdAt')).toBeNull();
            expect(equifit.get('updatedAt')).toBeNull();
            expect(equifit.get('updatedBy')).toBeNull();
            expect(equifit.get('clubName')).toBeNull();
            expect(equifit.get('complete')).toBe(false);
        });
    });
});
