var mongoose = require('mongoose'),
    models = require('./models');

module.exports = {
    check: function() {
        models.Equifit.find({}, function(err, equifits) {
            if (equifits.length === 0) {
                console.log('no equifits found, seeding...');
                var newEquifit = new models.Equifit({
                    createdAt: "2014-03-15T13:30:00",
                    updatedAt: "2014-04-29T13:30:00",
                    updatedBy: "Josh Smith",
                    clubName: "Tribeca",
                    complete: false
                });
                newEquifit.save(function(err, equifit) {
                    console.log('successfully inserted equifit: ' + equifit._id);
                });

                newEquifit = new models.Equifit({
                    createdAt: "2014-05-01T13:30:00",
                    updatedAt: "2014-08-02T13:30:00",
                    updatedBy: "Billy Joel",
                    clubName: "895 Broadway",
                    complete: false
                });
                newEquifit.save(function(err, equifit) {
                    console.log('successfully inserted equifit: ' + equifit._id);
                });

                newEquifit = new models.Equifit({
                    createdAt: "2013-05-01T13:30:00",
                    updatedAt: "2013-08-02T13:30:00",
                    updatedBy: "Bob Marley",
                    clubName: "West Side",
                    complete: true
                });
                newEquifit.save(function(err, equifit) {
                    console.log('successfully inserted equifit: ' + equifit._id);
                });

                newEquifit = new models.Equifit({
                    createdAt: "2012-05-01T13:30:00",
                    updatedAt: "2012-01-06T13:30:00",
                    updatedBy: "Steve Martine",
                    clubName: "East Side",
                    complete: true
                });
                newEquifit.save(function(err, equifit) {
                    console.log('successfully inserted equifit: ' + equifit._id);
                });
            } else {
                console.log('found ' + equifits.length + ' existing equifits!');
            }
        });

        models.Form.find({}, function(err, forms) {
            if (forms.length === 0) {
                console.log('no forms found, seeding...');
                var newForm = new models.Form({
                    title: "PAR-Q",
                    complete: false,
                    totalQuestions: 5,
                    totalAnsweredQuestions: 2,
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
                        name: "Billy Joel",
                        email: "billy@test.com"
                    }
                });
                newForm.save(function (err, form) {
                    console.log('successfully inserted document: ' + form._id);
                });

                newForm = new models.Form({
                    title: "Personal Info",
                    complete: false,
                    totalQuestions: 10,
                    totalAnsweredQuestions: 3,
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
                });
                newForm.save(function (err, form) {
                    console.log('successfully inserted document: ' + form._id);
                });

                newForm = new models.Form({
                    title: "Goals",
                    complete: false,
                    totalQuestions: 12,
                    totalAnsweredQuestions: 1,
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
                        title: "Mrs",
                        name: "Donna Summer",
                        email: "d.summer@test.com"
                    }
                });
                newForm.save(function (err, form) {
                    console.log('successfully inserted document: ' + form._id);
                });

                newForm = new models.Form({
                    title: "Orthopedic",
                    complete: false,
                    totalQuestions: 13,
                    totalAnsweredQuestions: 0,
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
                        name: "Gene Simmons",
                        email: "kiss@test.com"
                    }
                });
                newForm.save(function (err, form) {
                    console.log('successfully inserted document: ' + form._id);
                });

                newForm = new models.Form({
                    title: "Exercise History",
                    complete: false,
                    totalQuestions: 7,
                    totalAnsweredQuestions: 6,
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
                        name: "Richie Blackmore",
                        email: "deep.purple@test.com"
                    }
                });
                newForm.save(function (err, form) {
                    console.log('successfully inserted document: ' + form._id);
                });

                newForm = new models.Form({
                    title: "Lifestyle",
                    complete: false,
                    totalQuestions: 15,
                    totalAnsweredQuestions: 10,
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
                        name: "Jimmy Page",
                        email: "led.zeppelin@test.com"
                    }
                });
                newForm.save(function (err, form) {
                    console.log('successfully inserted document: ' + form._id);
                });

                newForm = new models.Form({
                    title: "Physical Test",
                    complete: true,
                    totalQuestions: 5,
                    totalAnsweredQuestions: 5,
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
                        name: "James Brown",
                        email: "j.brown@test.com"
                    }
                });
                newForm.save(function (err, form) {
                    console.log('successfully inserted document: ' + form._id);
                });

            } else {
                console.log('found ' + forms.length + ' existing forms!');
            }
        });
    }
};
