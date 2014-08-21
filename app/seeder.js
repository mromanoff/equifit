var mongoose = require('mongoose');
var models = require('./models');

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
                    trainerFacility: "Tribeca",
                    clientName: "Donna Summer",
                    clientId: 100000,
                    isSigned: false,
                    isValidated: false,
                    documents: [
                        {
                            _id: "53ed60ebb4932fec89e19a40",
                            templateId: 66,
                            title: "Consent Form",
                            templateType: "InformedConsent",
                            totalQuestions: 1,
                            totalCompletedQuestions: 0
                        },

                        {
                            _id: "53ed60ebb4932fec89e19a48",
                            title: "PAR-Q",
                            templateId: 2,
                            templateType: 2,
                            totalQuestions: 5,
                            totalCompletedQuestions: 2
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a49",
                            title: "Personal Info",
                            templateId: 2,
                            templateType: 2,
                            totalQuestions: 5,
                            totalCompletedQuestions: 2
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a50",
                            templateId: 4,
                            templateType: 2,
                            title: "Goals",
                            totalQuestions: 12,
                            totalCompletedQuestions: 1
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a51",
                            templateId: 5,
                            templateType: 2,
                            title: "Orthopedic",
                            totalQuestions: 13,
                            totalCompletedQuestions: 0
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a52",
                            templateId: 6,
                            templateType: 2,
                            title: "Exercise History",
                            totalQuestions: 7,
                            totalCompletedQuestions: 6
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a53",
                            templateId: 7,
                            templateType: 2,
                            title: "Lifestyle",
                            totalQuestions: 15,
                            totalCompletedQuestions: 10
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a54",
                            templateId: 8,
                            templateType: 2,
                            title: "Physical Test",
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
                    trainerFacility: "895 Broadway",
                    clientName: "Donna Summer",
                    clientId: 100000,
                    isSigned: false,
                    isValidated: false,
                    documents: [
                        {
                            _id: "53ed60ebb4932fec89e19a40",
                            templateId: 66,
                            templateType: "InformedConsent",
                            title: "Consent Form",
                            totalQuestions: 1,
                            totalCompletedQuestions: 0
                        },

                        {
                            _id: "53ed60ebb4932fec89e19a48",
                            title: "PAR-Q",
                            templateId: 2,
                            templateType: 2,
                            totalQuestions: 5,
                            totalCompletedQuestions: 2
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a49",
                            title: "Personal Info",
                            templateId: 2,
                            templateType: 2,
                            totalQuestions: 5,
                            totalCompletedQuestions: 2
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a50",
                            templateId: 4,
                            templateType: 2,
                            title: "Goals",
                            totalQuestions: 12,
                            totalCompletedQuestions: 1
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a51",
                            templateId: 5,
                            templateType: 2,
                            title: "Orthopedic",
                            totalQuestions: 13,
                            totalCompletedQuestions: 0
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a52",
                            templateId: 6,
                            templateType: 2,
                            title: "Exercise History",
                            totalQuestions: 7,
                            totalCompletedQuestions: 6
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a53",
                            templateId: 7,
                            templateType: 2,
                            title: "Lifestyle",
                            totalQuestions: 15,
                            totalCompletedQuestions: 10
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a54",
                            templateId: 8,
                            templateType: 2,
                            title: "Physical Test",
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
                            _id: "53ed60ebb4932fec89e19a40",
                            templateId: 66,
                            templateType: "InformedConsent",
                            title: "Consent Form",
                            totalQuestions: 1,
                            totalCompletedQuestions: 0
                        },

                        {
                            _id: "53ed60ebb4932fec89e19a48",
                            title: "PAR-Q",
                            templateId: 2,
                            templateType: 2,
                            totalQuestions: 5,
                            totalCompletedQuestions: 2
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a49",
                            title: "Personal Info",
                            templateId: 2,
                            templateType: 2,
                            totalQuestions: 5,
                            totalCompletedQuestions: 2
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a50",
                            templateId: 4,
                            templateType: 2,
                            title: "Goals",
                            totalQuestions: 12,
                            totalCompletedQuestions: 1
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a51",
                            templateId: 5,
                            templateType: 2,
                            title: "Orthopedic",
                            totalQuestions: 13,
                            totalCompletedQuestions: 0
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a52",
                            templateId: 6,
                            templateType: 2,
                            title: "Exercise History",
                            totalQuestions: 7,
                            totalCompletedQuestions: 6
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a53",
                            templateId: 7,
                            templateType: 2,
                            title: "Lifestyle",
                            totalQuestions: 15,
                            totalCompletedQuestions: 10
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a54",
                            templateId: 8,
                            templateType: 2,
                            title: "Physical Test",
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
                            _id: "53ed60ebb4932fec89e19a40",
                            templateId: 66,
                            templateType: "InformedConsent",
                            title: "Consent Form",
                            totalQuestions: 1,
                            totalCompletedQuestions: 0
                        },

                        {
                            _id: "53ed60ebb4932fec89e19a48",
                            title: "PAR-Q",
                            templateId: 2,
                            templateType: 2,
                            totalQuestions: 5,
                            totalCompletedQuestions: 2
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a49",
                            title: "Personal Info",
                            templateId: 2,
                            templateType: 2,
                            totalQuestions: 5,
                            totalCompletedQuestions: 2
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a50",
                            templateId: 4,
                            templateType: 2,
                            title: "Goals",
                            totalQuestions: 12,
                            totalCompletedQuestions: 1
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a51",
                            templateId: 5,
                            templateType: 2,
                            title: "Orthopedic",
                            totalQuestions: 13,
                            totalCompletedQuestions: 0
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a52",
                            templateId: 6,
                            templateType: 2,
                            title: "Exercise History",
                            totalQuestions: 7,
                            totalCompletedQuestions: 6
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a53",
                            templateId: 7,
                            templateType: 2,
                            title: "Lifestyle",
                            totalQuestions: 15,
                            totalCompletedQuestions: 10
                        },
                        {
                            _id: "53ed60ebb4932fec89e19a54",
                            templateId: 8,
                            templateType: 2,
                            title: "Physical Test",
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
                    _id: "53ed60ebb4932fec89e19a40",
                    templateId: 66,
                    templateType: "InformedConsent",
                    title: "Consent Form",
                    totalQuestions: 1,
                    totalCompletedQuestions: 0,
                    formSchema: {
                        initials: {
                            type: "Text",
                            title: "first & last initials",
                            validators: ["required"]
                        }
                    },

                    fieldsets: [
                        {
                            legend: "Consent Form",
                            fields: ["initials"]
                        }
                    ],

                    data: {}
                });
                newForm.save(function (err, form) {
                    console.log('successfully inserted document: ' + form._id);
                });

                newForm = new models.Form({
                    _id: "53ed60ebb4932fec89e19a48",
                    templateId: 2,
                    templateType: 2,
                    title: "PAR-Q",
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
                            fields: ["title", "name", "email"]
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
                    templateType: 2,
                    title: "Personal Info",
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
                            fields: ["title", "name", "email"]
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
                    templateType: 2,
                    title: "Goals",
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
                            fields: ["title", "name", "email"]
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
                    templateType: 2,
                    title: "Orthopedic",
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
                            fields: ["title", "name", "email"]
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
                    templateType: 2,
                    title: "Exercise History",
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
                            fields: ["title", "name", "email"]
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
                    templateType: 2,
                    title: "Lifestyle",
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
                            fields: ["title", "name", "email"]
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
                    templateType: 2,
                    title: "Physical Test",
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
                            fields: ["title", "name", "email"]
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
