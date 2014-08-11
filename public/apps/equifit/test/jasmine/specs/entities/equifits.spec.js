define(function(require) {
    "use strict";

    var EquifitEntities = require('entities/equifits');
    var EquifitEntity = require('entities/equifit');

    var EquifitEntitiesFixtures = {
        GET: {
            equifits: [
                {
                    id: 1,
                    createdAt: '2014-08-08',
                    updatedAt: '2014-08-08',
                    updatedBy: 'Bob',
                    clubName: 'Tribeca',
                    complete: false
                },
                {
                    id: 2,
                    createdAt: '2014-08-08',
                    updatedAt: '2014-08-08',
                    updatedBy: 'Bob',
                    clubName: 'Tribeca',
                    complete: false
                },
                {
                    id: 3,
                    createdAt: '2014-08-08',
                    updatedAt: '2014-08-08',
                    updatedBy: 'Bob',
                    clubName: 'Tribeca',
                    complete: false
                }
            ]
        }
    };

    // Test that the Router exists.
    describe("Equifit Entities Collection", function() {

        it('should exist', function(){
            expect(EquifitEntities).toBeDefined();
            expect(EquifitEntities.prototype instanceof Backbone.Collection).toBe(true);
        });

        it('should have a url mapped to it', function(){
            var equifits = new EquifitEntities();
            expect(equifits.url).toBeDefined();
           // expect(equifits.url).toBeTruthy();
        });

        it("calls url function", function() {
            var equifits = new EquifitEntities();
            spyOn(equifits, "url");
            equifits.url();
            expect(equifits.url).toHaveBeenCalled();
        });

        it("url function return string value", function() {
            var equifits = new EquifitEntities();
            expect(equifits.url()).toEqual(jasmine.any(String));
        });

        it('should have a model', function(){
            var equifits = new EquifitEntities();
            expect(equifits.model).toBe(EquifitEntity);
        });

        it('should be able to process a successful response from the server', function(){
            // set up the fake server
            var fakeServer = sinon.fakeServer.create();
            fakeServer.respondWith('GET',
                '/equifits',
                [ 200,
                    { 'Content-type': 'application/json' },
                    JSON.stringify(EquifitEntitiesFixtures.GET.equifits)
                ]);

            var equifits = new EquifitEntities();
            equifits.url = '/equifits';
            equifits.fetch();
            fakeServer.respond();
            expect(equifits.length).toBe(3);

            // tear down the fake server
            fakeServer.restore();
        });
    });
});
