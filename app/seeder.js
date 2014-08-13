var mongoose = require('mongoose'),
    models = require('./models');

module.exports = {
    check: function() {
        models.Equifit.find({}, function(err, equifits) {
            if (equifits.length === 0) {
                console.log('no equifits found, seeding...');
                var newEquifit = new models.Equifit({
                    createdAt: "2014-03-15T13:30:00",
                    updatedAt: null,
                    trainerName: "Josh Smith",
                    clubName: "Tribeca",
                    isComplete: false,
                    isSigned: false
                });
                newEquifit.save(function(err, equifit) {
                    console.log('successfully inserted equifit: ' + equifit._id);
                });

                newEquifit = new models.Equifit({
                    createdAt: "2014-05-01T13:30:00",
                    updatedAt: "2014-08-02T13:30:00",
                    trainerName: "Billy Joel",
                    clubName: "895 Broadway",
                    isComplete: false,
                    isSigned: false
                });
                newEquifit.save(function(err, equifit) {
                    console.log('successfully inserted equifit: ' + equifit._id);
                });

                newEquifit = new models.Equifit({
                    createdAt: "2013-05-01T13:30:00",
                    updatedAt: "2013-08-02T13:30:00",
                    trainerName: "Bob Marley",
                    clubName: "West Side",
                    isComplete: true,
                    isSigned: false
                });
                newEquifit.save(function(err, equifit) {
                    console.log('successfully inserted equifit: ' + equifit._id);
                });

                newEquifit = new models.Equifit({
                    createdAt: "2012-05-01T13:30:00",
                    updatedAt: "2012-01-06T13:30:00",
                    trainerName: "Steve Martine",
                    clubName: "East Side",
                    isComplete: true,
                    isSigned: false
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
                    id: 1000,
                    templateId: 2,
                    title: "PAR-Q",
                    isComplete: false,
                    totalQuestions: 5,
                    totalCompletedQuestions: 2,
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
                    id: 1001,
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
                });
                newForm.save(function (err, form) {
                    console.log('successfully inserted document: ' + form._id);
                });

                newForm = new models.Form({
                    id: 1003,
                    templateId: 4,
                    title: "Goals",
                    isComplete: false,
                    totalQuestions: 12,
                    totalCompletedQuestions: 1,
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
                    id: 1004,
                    templateId: 5,
                    title: "Orthopedic",
                    isComplete: false,
                    totalQuestions: 13,
                    totalCompletedQuestions: 0,
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
                    id: 1005,
                    templateId: 6,
                    title: "Exercise History",
                    isComplete: false,
                    totalQuestions: 7,
                    totalCompletedQuestions: 6,
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
                    id: 1006,
                    templateId: 7,
                    title: "Lifestyle",
                    isComplete: false,
                    totalQuestions: 15,
                    totalCompletedQuestions: 10,
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
                    id: 1007,
                    templateId: 8,
                    title: "Physical Test",
                    isComplete: true,
                    totalQuestions: 5,
                    totalCompletedQuestions: 5,
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

        models.SubmitEquifit.find({}, function(err, items) {
            if (items.length === 0) {
                console.log('no submitted equifits found, seeding...');
                var equifit = new models.SubmitEquifit({
                    isValidated: true
                });
                equifit.save(function (err, item) {
                    console.log('successfully inserted submit equifit: ' + item._id);
                });
            } else {
                console.log('found ' + items.length + ' existing forms!');
            }
        });
    }
};
