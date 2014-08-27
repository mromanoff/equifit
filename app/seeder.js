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
                    title: "Informed Consent",
                    totalQuestions: 1,
                    totalCompletedQuestions: 0,

                    formSchema: {
                        consent01: {
                            type: "Text",
                            title: "first & last initial",
                            help: "I have read this form, and I understand the test procedures I will perform. I consent to participate in the Equifit and understand that the information obtained during this evaluation may be used for statistical purposes"
                        }
                    },
                    fieldsets: [{"legend": "Informed Consent", "fields": ["consent01"]}],
                    data: {
                        consent01: null
                    },
                    content: [
                        {
                            title: "Informed Consent",
                            text: "The Equifit is a measure of your overall fitness level. It is not intended as a formal \“stress test.\”"
                        },
                        {
                            title: "Explanation of the fitness evaluation",
                            text: "The Equifit includes measurements of weight, percent body fat, resting heart rate, blood pressure, flexibility, muscle strength and muscle endurance. You will also be performing the following: a functional movement screen (FMS), a passive range of motion screen, and an estimated VO2Max test. We may stop any test at any time because of signs of fatigue or discomfort. During the performance of the test, a personal trainer will monitor your heart rate."
                        },
                        {
                            title: "Risks and discomfort",
                            text: "here exists the possibility of certain changes during the Equifit. They include abnormal blood pressure, fainting, disorders of the heart beat, and in very rare instances, heart attack. Every effort will be made to minimize these discomforts by a preliminary screen and by observation during the testing."
                        },
                        {
                            title: "Benefits to be expected",
                            text: "The information obtained during this test will help you gauge your fitness level and will be used to develop effective, goal-directed fitness programs."
                        },
                        {
                            title: "Inquiries",
                            text: "If you have any concerns or questions, please ask us for further explanations"
                        },
                        {
                            title: "Freedom of consent",
                            text: "Your permission to perform the Equifit is voluntary. You are free to decline consent or participation if you so desire"
                        }
                    ]
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
                        "personal01": {
                            "type": "Text",
                            "title": "Trainer First & Last Name",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": null
                        },
                        "personal02": {
                            "type": "Text",
                            "title": "Client First & Last Name",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": null
                        },
                        "personal03": {
                            "type": "Select",
                            "title": "Age",
                            "options": [
                                {"val": "personal03-1", "label": "< 18"},
                                {"val": "personal03-2", "label": "18 - 22"},
                                {"val": "personal03-3", "label": "23 - 27"},
                                {"val": "personal03-4", "label": "28 - 32"},
                                {"val": "personal03-5", "label": "33 - 37"},
                                {"val": "personal03-6", "label": "38 - 42"},
                                {"val": "personal03-7", "label": "43 - 47"},
                                {"val": "personal03-8", "label": "48 - 52"},
                                {"val": "personal03-9", "label": "53 - 57"},
                                {"val": "personal03-10", "label": "58 - 62"},
                                {"val": "personal03-11", "label": "63 - 67"},
                                {"val": "personal03-12", "label": "68 - 72"},
                                {"val": "personal03-13", "label": "72 +"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "personal04": {
                            "type": "Select",
                            "title": "Gender",
                            "options": [
                                {"val": "", "label": "Select"},
                                {"val": "personal04-1", "label": "Male"},
                                {"val": "personal04-2", "label": "Female"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "personal05": {
                            "type": "Date",
                            "title": "Date of Equifit",
                            "options": null,
                            "validators": [{"type": "required", "message": "Please select date.", "regex": null}],
                            "help": null
                        },
                        "personal06": {
                            "type": "Select",
                            "title": "Club",
                            "options": [{"val": "", "label": "Select"}],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        }
                    },
                    "fieldsets": [
                        {
                            "legend": "Personal Information",
                            "fields": [
                                "personal01",
                                "personal02",
                                "personal03",
                                "personal04",
                                "personal05",
                                "personal06"
                            ]
                        }
                    ],
                    "data": {
                        "personal01": null,
                        "personal02": null,
                        "personal03": null,
                        "personal04": null,
                        "personal05": null,
                        "personal06": null
                    }
                });
                newForm.save(function (err, form) {
                    console.log('successfully inserted document: ' + form._id);
                });

                newForm = new models.Form({
                    _id: "53ed60ebb4932fec89e19a50",
                    templateId: 4,
                    templateType: 2,
                    "title": "Goals & Habits",
                    "totalQuestions": 11,
                    "totalCompletedQuestions": 0,

                    "formSchema": {
                        "goals01": {
                            "type": "Text",
                            "title": "Fitness goal #1",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": null
                        },
                        "goals02": {
                            "type": "Text",
                            "title": "Fitness goal #2",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": null
                        },
                        "goals03": {
                            "type": "Text",
                            "title": "Fitness goal #3",
                            "options": null,
                            "validators": [],
                            "help": null
                        },
                        "goals04": {
                            "type": "Select",
                            "title": "How long have you wanted to achieve your number one goal?",
                            "options": [
                                {"val": "goals04-1", "label": "Less than 3 months"},
                                {"val": "goals04-2", "label": "3 - 6 months"},
                                {"val": "goals04-3", "label": "7 - 11 months"},
                                {"val": "goals04-4", "label": "Longer than 3 years"},
                                {"val": "goals04-5", "label": "Other"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "goals05": {
                            "type": "Radio",
                            "title": "Have you ever achieved this goal in the past?",
                            "options": [
                                {"val": "goals05-1", "label": "Yes"},
                                {"val": "goals05-2", "label": "No"},
                                {"val": "goals05-3", "label": "Partially"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "goals06": {
                            "type": "Date",
                            "title": "When would you like to achieve it by?",
                            "options": null,
                            "validators": [{"type": "required", "message": "Please select date.", "regex": null}],
                            "help": null
                        },
                        "goals07": {
                            "type": "Text",
                            "title": "Why would you like to achieve this goal?",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": null
                        },
                        "goals08": {
                            "type": "Text",
                            "title": "What is the biggest challenge getting in your way of achieving each of these goals?",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": null
                        },
                        "goals09": {
                            "type": "Text",
                            "title": "What strategies in the past have you utilized to overcome these challenges, if any?",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": null
                        },
                        "goals10": {
                            "type": "Radio",
                            "title": "On a scale of 1 - 5, how committed are you to each goal?",
                            "options": [
                                {"val": "goals10-1", "label": "1"},
                                {"val": "goals10-2", "label": "2"},
                                {"val": "goals10-3", "label": "3"},
                                {"val": "goals10-4", "label": "4"},
                                {"val": "goals10-5", "label": "5"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "goals11": {
                            "type": "Text",
                            "title": "Notes / Strategy Ideas",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": null
                        }
                    },
                    "fieldsets": [
                        {
                            "legend": "Goals & Habits",
                            "fields": [
                                "goals01",
                                "goals02",
                                "goals03",
                                "goals04",
                                "goals05",
                                "goals06",
                                "goals07",
                                "goals08",
                                "goals09",
                                "goals10",
                                "goals11"
                            ]
                        }
                    ],
                    "data": {
                        "goals01": null,
                        "goals02": null,
                        "goals03": null,
                        "goals04": null,
                        "goals05": null,
                        "goals06": null,
                        "goals07": null,
                        "goals08": null,
                        "goals09": null,
                        "goals10": null,
                        "goals11": null
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
                        "exercisehistory01": {
                            "type": "Text",
                            "title": "Tell me about your current exercise routine?",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": null
                        },
                        "exercisehistory02": {
                            "type": "Select",
                            "title": "How many times per week on average do you engage in physical activity and/or exercise?",
                            "options": [
                                {"val": "exercisehistory02-1", "label": "0"},
                                {"val": "exercisehistory02-2", "label": "1"},
                                {"val": "exercisehistory02-3", "label": "2"},
                                {"val": "exercisehistory02-4", "label": "3"},
                                {"val": "exercisehistory02-5", "label": "4"},
                                {"val": "exercisehistory02-6", "label": "5"},
                                {"val": "exercisehistory02-7", "label": "6"},
                                {"val": "exercisehistory02-8", "label": "7"},
                                {"val": "exercisehistory02-9", "label": "8+"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "exercisehistory03": {
                            "type": "Radio",
                            "title": "Do you or have you ever strength trained? (free weights / machines / body wieght)",
                            "options": [
                                {"val": "exercisehistory03-1", "label": "Yes"},
                                {"val": "exercisehistory03-2", "label": "No"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        }
                    },
                    "fieldsets": [
                        {
                            "legend": "General questions about your exercise history",
                            "fields": [
                                "exercisehistory01",
                                "exercisehistory02",
                                "exercisehistory03"
                            ]
                        }
                    ],
                    "data": {"exercisehistory01": null, "exercisehistory02": null, "exercisehistory03": null}

                });
                newForm.save(function (err, form) {
                    console.log('successfully inserted document: ' + form._id);
                });

                newForm = new models.Form({
                    _id: "53ed60ebb4932fec89e19a53",
                    templateId: 5,
                    templateType: 2,
                    title: "Lifestyle",
                    totalQuestions: 7,
                    totalCompletedQuestions: 0,

                    formSchema: {
                        "lifestyle01": {
                            "type": "Select",
                            "title": "On a scale of 1-5, on average how stressful is your day?",
                            "options": [
                                {"val": "lifestyle01-1", "label": "1"},
                                {"val": "lifestyle01-2", "label": "2"},
                                {"val": "lifestyle01-3", "label": "3"},
                                {"val": "lifestyle01-4", "label": "4"},
                                {"val": "lifestyle01-5", "label": "5"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "lifestyle02": {
                            "type": "Radio",
                            "title": "Do you feel exercise helps you in managing your stress?",
                            "options": [
                                {"val": "lifestyle02-1", "label": "Yes"},
                                {"val": "lifestyle02-2", "label": "No"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "lifestyle03": {
                            "type": "Text",
                            "title": "Describe your typical daily nutritional habits?",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "Number of times you eat per day and basic content of diet"
                        },
                        "lifestyle04": {
                            "type": "Radio",
                            "title": "Do you feel you need to change anything with regards to your nutrition?",
                            "options": [
                                {"val": "lifestyle04-1", "label": "Yes"},
                                {"val": "lifestyle04-2", "label": "No"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "lifestyle05": {
                            "type": "Text",
                            "title": "What types of liquids do you typically drink?",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": null
                        },
                        "lifestyle06": {
                            "type": "Select",
                            "title": "How much water do you take in daily?",
                            "options": [
                                {"val": "lifestyle06-1", "label": "None"},
                                {"val": "lifestyle06-2", "label": "1 - 2"},
                                {"val": "lifestyle06-3", "label": "3 - 4"},
                                {"val": "lifestyle06-4", "label": "5 - 6"},
                                {"val": "lifestyle06-5", "label": "7 - 8"},
                                {"val": "lifestyle06-6", "label": "9 - 10"},
                                {"val": "lifestyle06-7", "label": "11 - 12"},
                                {"val": "lifestyle06-8", "label": "More than 12"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": "Number in glasses. One glass = 8 fluid ounces."
                        },
                        "lifestyle07": {
                            "type": "Text",
                            "title": "Before we get started with assessments, do you have any additional comments or is there anything we did not cover?",
                            "options": null,
                            "validators": [],
                            "help": null
                        }
                    },
                    fieldsets: [
                        {
                            "legend": "Stress",
                            "fields": [
                                "lifestyle01",
                                "lifestyle02"
                            ]
                        },
                        {
                            "legend": "Nutrition",
                            "fields": [
                                "lifestyle03",
                                "lifestyle04",
                                "lifestyle05",
                                "lifestyle06"
                            ]
                        },
                        {"legend": "Additional Comments", "fields": ["lifestyle07"]}
                    ],
                    data: {
                        "lifestyle01": null,
                        "lifestyle02": null,
                        "lifestyle03": null,
                        "lifestyle04": null,
                        "lifestyle05": null,
                        "lifestyle06": null,
                        "lifestyle07": null
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
