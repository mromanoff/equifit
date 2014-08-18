var mongoose = require('mongoose'),
    models = require('./models');

module.exports = {
    check: function () {
        models.Equifit.find({}, function (err, equifits) {
            if (equifits.length === 0) {
                console.log('no equifits found, seeding...');
                var newEquifit = new models.Equifit({
                    _id: "53ed60ebb4932fec89e19a41",
                    appointmentAt: "2014-03-15T13:30:00",
                    updatedAt: null,
                    trainerName: "Josh Smith",
                    clientName: "Donna Summer",
                    clientId: 100000,
                    trainerFacility: "Tribeca",
                    isSigned: false,
                    isValidated: false,
                    documents: [
                        {
                           // _id: "53ed60ebb4932fec89e19a48",
                            title: "PAR-Q",
                            templateId: 2,
                            totalQuestions: 5,
                            totalCompletedQuestions: 2
                        },
                        {
                           // _id: "53ed60ebb4932fec89e19a49",
                            title: "Personal Info",
                            templateId: 2,
                            totalQuestions: 5,
                            totalCompletedQuestions: 2
                        },
                        {
                           // _id: "53ed60ebb4932fec89e19a50",
                            templateId: 4,
                            title: "Goals",
                            isComplete: false,
                            totalQuestions: 12,
                            totalCompletedQuestions: 1
                        },
                        {
                           // _id: "53ed60ebb4932fec89e19a51",
                            templateId: 5,
                            title: "Orthopedic",
                            isComplete: false,
                            totalQuestions: 13,
                            totalCompletedQuestions: 0
                        },
                        {
                           // _id: "53ed60ebb4932fec89e19a52",
                            templateId: 6,
                            title: "Exercise History",
                            isComplete: false,
                            totalQuestions: 7,
                            totalCompletedQuestions: 6
                        },
                        {
                           // _id: "53ed60ebb4932fec89e19a53",
                            templateId: 7,
                            title: "Lifestyle",
                            isComplete: false,
                            totalQuestions: 15,
                            totalCompletedQuestions: 10
                        },
                        {
                           // _id: "53ed60ebb4932fec89e19a54",
                            templateId: 8,
                            title: "Physical Test",
                            isComplete: true,
                            totalQuestions: 5,
                            totalCompletedQuestions: 5
                        }
                    ]
                });
                newEquifit.save(function (err, equifit) {
                    console.log('successfully inserted equifit: ' + equifit._id);
                });

                newEquifit = new models.Equifit({
                    _id: "53ed60ebb4932fec89e19a42",
                    appointmentAt: "2014-05-01T13:30:00",
                    updatedAt: "2014-08-02T13:30:00",
                    trainerName: "Billy Joel",
                    clientName: "Donna Summer",
                    clientId: 100000,
                    trainerFacility: "895 Broadway",
                    isSigned: false,
                    isValidated: false,
                    documents: [
                        {
                            _id: "53ed60ebb4932fec89e19a48",
                            title: "PAR-Q",
                            templateId: 2,
                            totalQuestions: 5,
                            totalCompletedQuestions: 2
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a49",
                            title: "Personal Info",
                            templateId: 2,
                            totalQuestions: 5,
                            totalCompletedQuestions: 2
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a50",
                            templateId: 4,
                            title: "Goals",
                            isComplete: false,
                            totalQuestions: 12,
                            totalCompletedQuestions: 1
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a51",
                            templateId: 5,
                            title: "Orthopedic",
                            isComplete: false,
                            totalQuestions: 13,
                            totalCompletedQuestions: 0
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a52",
                            templateId: 6,
                            title: "Exercise History",
                            isComplete: false,
                            totalQuestions: 7,
                            totalCompletedQuestions: 6
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a53",
                            templateId: 7,
                            title: "Lifestyle",
                            isComplete: false,
                            totalQuestions: 15,
                            totalCompletedQuestions: 10
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a54",
                            templateId: 8,
                            title: "Physical Test",
                            isComplete: true,
                            totalQuestions: 5,
                            totalCompletedQuestions: 5
                        }
                    ]
                });
                newEquifit.save(function (err, equifit) {
                    console.log('successfully inserted equifit: ' + equifit._id);
                });

                newEquifit = new models.Equifit({
                    _id: "53ed60ebb4932fec89e19a48",
                    appointmentAt: "2013-05-01T13:30:00",
                    updatedAt: "2013-08-02T13:30:00",
                    clientName: "Donna Summer",
                    clientId: 100000,
                    trainerName: "Bob Marley",
                    trainerFacility: "West Side",
                    isSigned: false,
                    isValidated: false,
                    documents: [
                        {
                            _id: "53ed60ebb4932fec89e19a48",
                            title: "PAR-Q",
                            templateId: 2,
                            totalQuestions: 5,
                            totalCompletedQuestions: 2
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a49",
                            title: "Personal Info",
                            templateId: 2,
                            totalQuestions: 5,
                            totalCompletedQuestions: 2
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a50",
                            templateId: 4,
                            title: "Goals",
                            isComplete: false,
                            totalQuestions: 12,
                            totalCompletedQuestions: 1
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a51",
                            templateId: 5,
                            title: "Orthopedic",
                            isComplete: false,
                            totalQuestions: 13,
                            totalCompletedQuestions: 0
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a52",
                            templateId: 6,
                            title: "Exercise History",
                            isComplete: false,
                            totalQuestions: 7,
                            totalCompletedQuestions: 6
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a53",
                            templateId: 7,
                            title: "Lifestyle",
                            isComplete: false,
                            totalQuestions: 15,
                            totalCompletedQuestions: 10
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a54",
                            templateId: 8,
                            title: "Physical Test",
                            isComplete: true,
                            totalQuestions: 5,
                            totalCompletedQuestions: 5
                        }
                    ]
                });
                newEquifit.save(function (err, equifit) {
                    console.log('successfully inserted equifit: ' + equifit._id);
                });

                newEquifit = new models.Equifit({
                    _id: "53ed60ebb4932fec89e19a43",
                    appointmentAt: "2012-05-01T13:30:00",
                    updatedAt: "2012-01-06T13:30:00",
                    clientName: "Donna Summer",
                    clientId: 100000,
                    trainerName: "Steve Martin",
                    trainerFacility: "East Side",
                    isSigned: true,
                    isValidated: true,
                    documents: [
                        {
                            _id: "53ed60ebb4932fec89e19a48",
                            title: "PAR-Q",
                            templateId: 2,
                            totalQuestions: 5,
                            totalCompletedQuestions: 2
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a49",
                            title: "Personal Info",
                            templateId: 2,
                            totalQuestions: 5,
                            totalCompletedQuestions: 2
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a50",
                            templateId: 4,
                            title: "Goals",
                            isComplete: false,
                            totalQuestions: 12,
                            totalCompletedQuestions: 1
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a51",
                            templateId: 5,
                            title: "Orthopedic",
                            isComplete: false,
                            totalQuestions: 13,
                            totalCompletedQuestions: 0
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a52",
                            templateId: 6,
                            title: "Exercise History",
                            isComplete: false,
                            totalQuestions: 7,
                            totalCompletedQuestions: 6
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a53",
                            templateId: 7,
                            title: "Lifestyle",
                            isComplete: false,
                            totalQuestions: 15,
                            totalCompletedQuestions: 10
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a54",
                            templateId: 8,
                            title: "Physical Test",
                            isComplete: true,
                            totalQuestions: 5,
                            totalCompletedQuestions: 5
                        }
                    ]
                });
                newEquifit.save(function (err, equifit) {
                    console.log('successfully inserted equifit: ' + equifit._id);
                });
            } else {
                console.log('found ' + equifits.length + ' existing equifits!');
            }
        });

        models.Form.find({}, function (err, forms) {
            if (forms.length === 0) {
                console.log('no forms found, seeding...');
                var newForm = new models.Form({
                    _id: "53ed60ebb4932fec89e19a48",
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

                    fieldsets: [
                        {
                            legend: "Member Information",
                            fields: ["title", "name", "email", "testHidden"]
                        }
                    ],

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
                    _id: "53ed60ebb4932fec89e19a49",
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

                    fieldsets: [
                        {
                            legend: "Member Information",
                            fields: ["title", "name", "email", "testHidden"]
                        }
                    ],

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
                    _id: "53ed60ebb4932fec89e19a50",
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

                    fieldsets: [
                        {
                            legend: "Member Information",
                            fields: ["title", "name", "email", "testHidden"]
                        }
                    ],

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
                    _id: "53ed60ebb4932fec89e19a51",
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

                    fieldsets: [
                        {
                            legend: "Member Information",
                            fields: ["title", "name", "email", "testHidden"]
                        }
                    ],

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
                    _id: "53ed60ebb4932fec89e19a52",
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

                    fieldsets: [
                        {
                            legend: "Member Information",
                            fields: ["title", "name", "email", "testHidden"]
                        }
                    ],

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
                    _id: "53ed60ebb4932fec89e19a53",
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

                    fieldsets: [
                        {
                            legend: "Member Information",
                            fields: ["title", "name", "email", "testHidden"]
                        }
                    ],

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
                    _id: "53ed60ebb4932fec89e19a54",
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

                    fieldsets: [
                        {
                            legend: "Member Information",
                            fields: ["title", "name", "email", "testHidden"]
                        }
                    ],

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
