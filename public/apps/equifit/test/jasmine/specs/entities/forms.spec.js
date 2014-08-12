define(function(require) {
    'use strict';

    var FormEntities = require('entities/forms');
    var FormEntity = require('entities/form');
    var forms = new FormEntities();

    var FormEntitiesFixtures = {
        GET: {
            forms: [
                {
                    templateId: 3,
                    title: "Personal Info",
                    isComplete: false,
                    totalQuestions: 10,
                    totalCompletedQuestions: 3,
                    formSchema: {
                        title: {
                            type: "Select",
                            options: ["", "Mr", "Mrs", "Ms"]
                        },
                        name: "Text",
                        email: {
                            validators: ["required", "email"]
                        }
                    },

                    fieldsets: [{
                        legend: "Member Information",
                        fields: ["title", "name", "email", "testHidden"]
                    }],

                    data: {
                        title: "Mr",
                        name: "Bob Marley",
                        email: "b.marley@test.com"
                    }
                }
            ]
        }
    };

    // Test that the Router exists.
    describe("Form Entities Collection", function() {

        it('should exist', function(){
            expect(FormEntities).toBeDefined();
            expect(FormEntities.prototype instanceof Backbone.Collection).toBe(true);
        });

        it('should have a url mapped to it', function(){
            expect(forms.url).toBeDefined();
        });

        it("calls url function", function() {
            spyOn(forms, "url");
            forms.url();
            expect(forms.url).toHaveBeenCalled();
        });

        it("url function return string value", function() {
            expect(forms.url()).toEqual(jasmine.any(String));
        });

        it('should have a model', function(){
            expect(forms.model).toBe(FormEntity);
        });

        it('should be able to process a successful response from the server', function(){
            // set up the fake server
            var fakeServer = sinon.fakeServer.create();
            fakeServer.respondWith('GET',
                '/forms',
                [ 200,
                    { 'Content-type': 'application/json' },
                    JSON.stringify(FormEntitiesFixtures.GET.forms)
                ]);

            var forms = new FormEntities();
            forms.url = '/forms';
            forms.fetch();
            fakeServer.respond();
            expect(forms.length).toBe(1);

            // tear down the fake server
            fakeServer.restore();
        });
    });
});
