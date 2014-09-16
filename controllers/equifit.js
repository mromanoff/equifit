var models = require('../app/models');
var _ = require('underscore');

module.exports = {

    equifit: function (req, res) {
        'use strict';
        res.render('equifit', {title: 'Equifit'});
    },

    getEquifits: function (req, res) {
        'use strict';

        models.Equifit.find({}, function (err, data) {
            if (err) {
                res.json({error: 'No Equifits found.'});
            } else {
                if (_.isEmpty(data)) {
                    data = [{
                        appointmentAt: null,
                        updatedAt: null,
                        trainerName: 'Johnny Cash',
                        trainerFacility: 'Tribeca',
                        clientName: 'Donna Summer',
                        clientId: 100000,
                        isSigned: false,
                        isValidated: false,
                        documents: []
                    }];
                }
                res.json(data);
            }
        });
    },

    createEquifit: function (req, res) {
        'use strict';

        var data = {
            appointmentAt: null,
            updatedAt: null,
            trainerName: 'Johnny Cash',
            trainerFacility: 'Tribeca',
            clientName: 'Donna Summer',
            clientId: 100000,
            isSigned: false,
            isValidated: false,
            documents: [
                {
                    templateId: 1,
                    title: 'Informed Consent',
                    templateType: 'InformedConsent',
                    totalQuestions: 1,
                    totalCompletedQuestions: 0
                },

                {
                    title: 'Personal Info',
                    templateId: 2,
                    templateType: 'PersonalInformation',
                    totalQuestions: 5,
                    totalCompletedQuestions: 2
                },
                {
                    title: 'Medical / Orthopedic HX',
                    templateId: 3,
                    templateType: 'Medical',
                    totalQuestions: 5,
                    totalCompletedQuestions: 2
                },
                {
                    templateId: 4,
                    templateType: 'Lifestyle',
                    title: 'Lifestyle',
                    totalQuestions: 15,
                    totalCompletedQuestions: 10
                },

                {
                    templateId: 5,
                    templateType: 'ExerciseHistory',
                    title: 'Exercise History',
                    totalQuestions: 7,
                    totalCompletedQuestions: 6
                },
                {
                    templateId: 6,
                    templateType: 'GoalsHabits',
                    title: 'Goals & Habits',
                    totalQuestions: 12,
                    totalCompletedQuestions: 1
                },
                {
                    templateId: 7,
                    templateType: 'RegenerationNutrition',
                    title: 'Regeneration & Nutrition',
                    totalQuestions: 12,
                    totalCompletedQuestions: 1
                },
                {
                    templateId: 8,
                    templateType: 'BodyMeasurements',
                    title: 'Body Measurements',
                    totalQuestions: 12,
                    totalCompletedQuestions: 1
                },
                {
                    templateId: 9,
                    templateType: 'FunctionalMovementScreen',
                    title: 'Functional Movement Screen',
                    totalQuestions: 12,
                    totalCompletedQuestions: 1
                },
                {
                    templateId: 10,
                    templateType: 'Equistretch',
                    title: 'Equistretch',
                    totalQuestions: 12,
                    totalCompletedQuestions: 1
                },
                {
                    templateId: 11,
                    templateType: 'PerformanceTesting',
                    title: 'Performance Testing',
                    totalQuestions: 12,
                    totalCompletedQuestions: 1
                },
                {
                    templateId: 12,
                    templateType: 2,
                    title: 'Physical Test',
                    totalQuestions: 5,
                    totalCompletedQuestions: 5
                }
            ]
        };

        var newEquifit = new models.Equifit(_.extend(req.body, data));

        newEquifit.save(function (err, equifit) {
            if (err) {
                res.json({error: 'Error adding equifit.'});
            } else {
                console.log('response on post ', equifit);
                res.json(equifit);
            }
        });
    },

    updateEquifit: function (req, res) {
        'use strict';

        var obj = req.body;
        var id = obj._id;
        delete obj._id;
        if (id) {
            models.Equifit.update({_id: id}, obj, function (err, data) {
                if (err) {
                    res.json({error: 'Error saving equifit.'});
                } else {
                    // two sucess messages depends on Client response isValidated
                    if (obj.isValidated) {
                        res.json({
                            status: 'success',
                            title: 'This equifit result has been submitted to equifit administrator successfully!',
                            messages: [],
                            result: data
                        });
                    } else {
                        res.json({
                            status: 'info',
                            title: 'You haven’t entered some of the required areas.',
                            messages: [
                                {
                                    title: 'consent form',
                                    text: 'not signed'
                                },
                                {
                                    title: 'personal info',
                                    text: '3 fields'
                                },
                                {
                                    title: 'health qualification',
                                    text: '1 field'
                                },
                                {
                                    title: 'FMS',
                                    text: '3 field'
                                }
                            ],
                            result: data
                        });
                    }
                }
            });
        }
    },

    getDocument: function (req, res) {
        'use strict';

        models.Form.findById(req.params.id, function (err, item) {
            if (err) {
                res.json({error: 'form not found.'});
            } else {
                res.json(item);
            }
        });
    },

    createDocument: function (req, res) {
        'use strict';

        var mockUp = [
                {
                    "templateId": 1,
                    "title": "Informed Consent",
                    "templateType": "InformedConsent",
                    "idPrefix": "informed-consent-",
                    "totalQuestions": 1,
                    "totalCompletedQuestions": 0,
                    "formSchema": {
                        "consent01": {
                            "type": "Text",
                            "title": "first & last initial",
                            "validators": ["required"],
                            "help": "I have read this form, and I understand the test procedures I will perform. I consent to participate in the Equifit and understand that the information obtained during this evaluation may be used for statistical purposes"
                        }
                    },
                    "fieldsets": [{"legend": "Informed Consent", "fields": ["consent01"]}],
                    "data": {},
                    "content": [
                        {
                            "title": "Informed Consent",
                            "text": "The Equifit is a measure of your overall fitness level. It is not intended as a formal \“stress test.\”"
                        },
                        {
                            "title": "Explanation of the fitness evaluation",
                            "text": "The Equifit includes measurements of weight, percent body fat, resting heart rate, blood pressure, flexibility, muscle strength and muscle endurance. You will also be performing the following: a functional movement screen (FMS), a passive range of motion screen, and an estimated VO2Max test. We may stop any test at any time because of signs of fatigue or discomfort. During the performance of the test, a personal trainer will monitor your heart rate."
                        },
                        {
                            "title": "Risks and discomfort",
                            "text": "here exists the possibility of certain changes during the Equifit. They include abnormal blood pressure, fainting, disorders of the heart beat, and in very rare instances, heart attack. Every effort will be made to minimize these discomforts by a preliminary screen and by observation during the testing."
                        },
                        {
                            "title": "Benefits to be expected",
                            "text": "The information obtained during this test will help you gauge your fitness level and will be used to develop effective, goal-directed fitness programs."
                        },
                        {
                            "title": "Inquiries",
                            "text": "If you have any concerns or questions, please ask us for further explanations"
                        },
                        {
                            "title": "Freedom of consent",
                            "text": "Your permission to perform the Equifit is voluntary. You are free to decline consent or participation if you so desire"
                        }
                    ]
                },

                {
                    "title": "Personal Info",
                    "templateId": 2,
                    "templateType": "PersonalInformation",
                    "totalQuestions": 5,
                    "totalCompletedQuestions": 2,
                    "idPrefix": "personal-info-",
                    "formSchema": {
                        "personal01": {
                            "type": "Text",
                            "title": "Trainer First & Last Name",
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}]
                        },
                        "personal02": {
                            "type": "Text",
                            "title": "Client First & Last Name",
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}]
                        },
                        "personal03": {
                            "type": "Select",
                            "title": "Gender",
                            "options": [
                                {"val": "", "label": "Select"},
                                {"val": "personal04-1", "label": "Male"},
                                {"val": "personal04-2", "label": "Female"}
                            ],
                            "validators": [
                                {
                                    "type": "required",
                                    "message": "Please select one.",
                                    "regex": null
                                }
                            ],
                            "help": null
                        },

                        "personal04": {
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
                            "validators": [
                                {
                                    "type": "required",
                                    "message": "Please select one.",
                                    "regex": null
                                }
                            ]
                        },

                        "personal05": {
                            "type": "Date",
                            "title": "Date of Equifit",
                            "yearStart": new Date().getFullYear(),
                            "yearEnd": new Date().getFullYear() + 10,
                            "validators": [
                                {
                                    "type": "required",
                                    "message": "Please select date.",
                                    "regex": null
                                }
                            ]
                        },
                        "personal06": {
                            "type": "Select",
                            "title": "Club",
                            "options": [
                                {"val": "", "label": "Select"},
                                {"val": "broadway", "label": "19 Street"},
                                {"val": "tribeca", "label": "Tribeca"},
                                {"val": "westside", "label": "West Side"},
                                {"val": "es", "label": "East Side"},
                                {"val": "les", "label": "Lower East Side"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}]
                        }
                    },

                    "fieldsets": [
                        {
                            "legend": "I am",
                            "fields": ["personal01"]
                        },
                        {
                            "legend": "Kelly Jackson is",
                            "fields": [
                                "personal02",
                                "personal03",
                                "personal04"
                            ]
                        },

                        {
                            "legend": "Date ofEquifit",
                            "fields": [
                                "personal05",
                                "personal06"
                            ]
                        }
                    ],
                    "data": {}

                },
                {
                    "title": "Medical/Orthopedic HX",
                    "templateId": 3,
                    "templateType": "MedicalOrthopedic",
                    "idPrefix": "medical-",
                    "totalQuestions": 11,
                    "totalCompletedQuestions": 0,
                    "formSchema": {
                        "medical01": {
                            "type": "Radio",
                            "title": "Do you experience an irregular or racing heart rate during rest or exercise?",
                            "options": [
                                {"val": "medical01-1", "label": "Yes"},
                                {"val": "medical01-2", "label": "No"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                            "fieldClass": "eventBinder",
                            "fieldAttrs": {
                                "data-action": "showHelp",
                                "data-target": "help-block",
                                "data-condition": "medical01-1"
                            }
                        },
                        "medical02": {
                            "type": "Radio",
                            "title": "Has a doctor ever said you have a heart condition and that you should only do physical activity recommended by a doctor?",
                            "options": [
                                {"val": "medical02-1", "label": "Yes"},
                                {"val": "medical02-2", "label": "No"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                            "fieldClass": "eventBinder",
                            "fieldAttrs": {
                                "data-action": "showHelp",
                                "data-target": "help-block",
                                "data-condition": "medical02-1"
                            }
                        },
                        "medical03": {
                            "type": "Radio",
                            "title": "Do you feel pain in your chest when you do physical activity?",
                            "options": [
                                {"val": "medical03-1", "label": "Yes"},
                                {"val": "medical03-2", "label": "No"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                            "fieldClass": "eventBinder",
                            "fieldAttrs": {
                                "data-action": "showHelp",
                                "data-target": "help-block",
                                "data-condition": "medical03-1"
                            }
                        },
                        "medical04": {
                            "type": "Radio",
                            "title": "Is your doctor currently prescribing drugs (for example, water pills) for your blood pressure or heart condition?",
                            "options": [
                                {"val": "medical04-1", "label": "Yes"},
                                {"val": "medical04-2", "label": "No"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                            "fieldClass": "eventBinder",
                            "fieldAttrs": {
                                "data-action": "showHelp",
                                "data-target": "help-block",
                                "data-condition": "medical04-1"
                            }
                        },
                        "medical05": {
                            "type": "Radio",
                            "title": "Do you lose your balance because of dizziness or do you ever lose consciousness?",
                            "options": [
                                {"val": "medical05-1", "label": "Yes"},
                                {"val": "medical05-2", "label": "No"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                            "fieldClass": "eventBinder",
                            "fieldAttrs": {
                                "data-action": "showHelp",
                                "data-target": "help-block",
                                "data-condition": "medical05-1"
                            }
                        },
                        "medical06": {
                            "type": "Radio",
                            "title": "Do you have a bone or joint problem that could be made worse by a change in your physical activity?",
                            "options": [
                                {"val": "medical06-1", "label": "Yes"},
                                {"val": "medical06-2", "label": "No"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                            "fieldClass": "eventBinder",
                            "fieldAttrs": {
                                "data-action": "showHelp",
                                "data-target": "help-block",
                                "data-condition": "medical06-1"
                            }
                        },
                        "medical07": {
                            "type": "Radio",
                            "title": "Do you know of any other reason why you should not do physical activity?",
                            "options": [
                                {"val": "medical07-1", "label": "Yes"},
                                {"val": "medical07-2", "label": "No"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                            "fieldClass": "eventBinder",
                            "fieldAttrs": {
                                "data-action": "showHelp",
                                "data-target": "help-block",
                                "data-condition": "medical07-1"
                            }
                        },
                        "medical08": {
                            "type": "Radio",
                            "title": "Are you over 65 and not accustomed to vigorous exercise?",
                            "options": [
                                {"val": "medical08-1", "label": "Yes"},
                                {"val": "medical08-2", "label": "No"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                            "fieldClass": "eventBinder",
                            "fieldAttrs": {
                                "data-action": "showHelp",
                                "data-target": "help-block",
                                "data-condition": "medical08-1"
                            }
                        },
                        "medical09": {
                            "type": "Radio",
                            "title": "Are you diabetic? ",
                            "options": [
                                {"val": "medical09-1", "label": "Yes"},
                                {"val": "medical09-2", "label": "No"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                            "fieldClass": "eventBinder",
                            "fieldAttrs": {
                                "data-action": "showHelp",
                                "data-target": "help-block",
                                "data-condition": "medical09-1"
                            }
                        },
                        "medical10": {
                            "type": "Radio",
                            "title": "Are you pregnant?",
                            "options": [
                                {"val": "medical10-1", "label": "Yes"},
                                {"val": "medical10-2", "label": "No"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                            "fieldClass": "eventBinder",
                            "fieldAttrs": {
                                "data-action": "showHelp",
                                "data-target": "help-block",
                                "data-condition": "medical10-1"
                            }
                        },
                        "medical11": {
                            "type": "Text",
                            "title": "Is there anything you would specifically like to learn about youself during the Equifit?",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                            "fieldClass": "eventBinder",
                            "fieldAttrs": {
                                "data-action": "showHelp",
                                "data-target": "help-block",
                                "data-condition": "medical11-1"
                            }
                        }
                    },
                    "fieldsets": [
                        {
                            "legend": "Heart",
                            "fields": [
                                "medical01",
                                "medical02",
                                "medical03",
                                "medical04"
                            ]
                        },
                        {
                            "legend": "Balance, Bone & Joint",
                            "fields": [
                                "medical05",
                                "medical06"
                            ]
                        },
                        {"legend": "Body Injury", "fields": ["medical07"]},
                        {
                            "legend": "Other Medical Conditions",
                            "fields": [
                                "medical08",
                                "medical09",
                                "medical10",
                                "medical11"
                            ]
                        }
                    ],
                    "data": {}
                },
                {
                    "templateId": 4,
                    "templateType": "Lifestyle",
                    "title": "Lifestyle",
                    "idPrefix": "lifestyle-",
                    "totalQuestions": 15,
                    "totalCompletedQuestions": 10,
                    "formSchema": {
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
                    "fieldsets": [
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
                    "data": {}
                },
                {
                    "templateId": 5,
                    "templateType": 2,
                    "title": "Exercise History",
                    "idPrefix": "exercise-history-",
                    "totalQuestions": 7,
                    "totalCompletedQuestions": 6,

                    "formSchema": {
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
                    "data": {}

                },

                {
                    "templateId": 6,
                    "templateType": 2,
                    "title": "Goals & Habits",
                    "idPrefix": "goals-habits-",
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
                    "data": {}

                },
                {
                    "templateId": 7,
                    "templateType": "RegenerationNutrition",
                    "title": "Regeneration & Nutrition",
                    "idPrefix": "regeneration-nutrition-",
                    "totalQuestions": 4,
                    "totalCompletedQuestions": 0,
                    "formSchema": {
                        "regeneration01": {
                            "type": "Text",
                            "title": "Number of times you eat per day and basic content of diet?",
                            "options": null,
                            "validators": [],
                            "help": null
                        },
                        "regeneration02": {
                            "type": "Radio",
                            "title": "Do you feel you need to change anything with regards to your nutrition?",
                            "options": [
                                {"val": "regeneration02-1", "label": "Yes"},
                                {"val": "regeneration02-2", "label": "No"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "regeneration03": {
                            "type": "Select",
                            "title": "What types of liquids do you typically drink?",
                            "options": [
                                {"val": "regeneration03-1", "label": "Water"},
                                {"val": "regeneration03-2", "label": "Coffee"},
                                {"val": "regeneration03-3", "label": "Tea"},
                                {"val": "regeneration03-4", "label": "Soda"},
                                {"val": "regeneration03-5", "label": "Wine"},
                                {"val": "regeneration03-6", "label": "Beer"},
                                {"val": "regeneration03-7", "label": "Liquor / Mixed Drink"},
                                {"val": "regeneration03-8", "label": "Coconut Water"},
                                {"val": "regeneration03-9", "label": "Fruit Juice"},
                                {"val": "regeneration03-10", "label": "Pressed Juices"},
                                {"val": "regeneration03-11", "label": "Protein Shakes"},
                                {"val": "regeneration03-12", "label": "Milk (including soy, almond, dairy, etc.)"},
                                {"val": "regeneration03-13", "label": "Energy Drinks"},
                                {"val": "regeneration03-14", "label": "Sports Drinks"},
                                {"val": "regeneration03-15", "label": "Other"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "regeneration04": {
                            "type": "Select",
                            "title": "How much water do you take in daily?",
                            "options": [
                                {"val": "regeneration04-1", "label": "None"},
                                {"val": "regeneration04-2", "label": "1 - 2 glasses"},
                                {"val": "regeneration04-3", "label": "3 - 4 glasses"},
                                {"val": "regeneration04-4", "label": "5 - 6 glasses"},
                                {"val": "regeneration04-5", "label": "7 - 8 glasses"},
                                {"val": "regeneration04-6", "label": "9 - 10 glasses"},
                                {"val": "regeneration04-7", "label": "11 - 12 glasses"},
                                {"val": "regeneration04-8", "label": "More than 12 glasses"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": "One glass = 8 fluid ounces"
                        }
                    },
                    "fieldsets": [
                        {
                            "legend": "Regeneration & Nutrition",
                            "fields": [
                                "regeneration01",
                                "regeneration02",
                                "regeneration03",
                                "regeneration04"
                            ]
                        }
                    ],
                    "data": {}
                },
                {
                    "templateId": 8,
                    "templateType": "BodyMeasurements",
                    "title": "Body Measurements",
                    "idPrefix": "body-measurements-",
                    "totalQuestions": 17,
                    "totalCompletedQuestions": 0,
                    "formSchema": {
                        "bodymeasurements01": {
                            "type": "Text",
                            "title": "Height",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "ft, in"
                        },
                        "bodymeasurements02": {
                            "type": "Number",
                            "title": "Weight",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "lbs"
                        },
                        "bodymeasurements03": {
                            "type": "Number",
                            "title": "Resting Heart Rate",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "bpm"
                        },
                        "bodymeasurements04": {
                            "type": "Number",
                            "title": "Blood Pressure",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": null
                        },
                        "bodymeasurements05": {
                            "type": "Number",
                            "title": "Right Upper Arm Circumference",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "in"
                        },
                        "bodymeasurements06": {
                            "type": "Number",
                            "title": "Right Upper Arm Circumference",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "in"
                        },
                        "bodymeasurements07": {
                            "type": "Number",
                            "title": "Left Upper Arm Circumference",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "in"
                        },
                        "bodymeasurements08": {
                            "type": "Number",
                            "title": "Chest Circumference",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "in"
                        },
                        "bodymeasurements09": {
                            "type": "Number",
                            "title": "Waist Circumference",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "in"
                        },
                        "bodymeasurements10": {
                            "type": "Number",
                            "title": "Abdominal Circumference",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "in"
                        },
                        "bodymeasurements11": {
                            "type": "Number",
                            "title": "Hip Circumference",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "in"
                        },
                        "bodymeasurements12": {
                            "type": "Number",
                            "title": "Right Mid Thigh Circumference",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "in"
                        },
                        "bodymeasurements13": {
                            "type": "Number",
                            "title": "Left Mid Thigh Circumference",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "in"
                        },
                        "bodymeasurements14": {
                            "type": "Number",
                            "title": "Skinfold Measurement - Tricep",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "mm"
                        },
                        "bodymeasurements15": {
                            "type": "Number",
                            "title": "Skinfold Measurement - Abdomen",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "mm"
                        },
                        "bodymeasurements16": {
                            "type": "Number",
                            "title": "Skinfold Measurement - Suprailiac",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "mm"
                        },
                        "bodymeasurements17": {
                            "type": "Number",
                            "title": "Skinfold Measurement - Mid Thigh",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "mm"
                        }
                    },
                    "fieldsets": [
                        {
                            "legend": "Body Measurements",
                            "fields": [
                                "bodymeasurements01",
                                "bodymeasurements02",
                                "bodymeasurements03",
                                "bodymeasurements04",
                                "bodymeasurements05",
                                "bodymeasurements06",
                                "bodymeasurements07",
                                "bodymeasurements08",
                                "bodymeasurements09",
                                "bodymeasurements10",
                                "bodymeasurements11",
                                "bodymeasurements12",
                                "bodymeasurements13",
                                "bodymeasurements14",
                                "bodymeasurements15",
                                "bodymeasurements16",
                                "bodymeasurements17"
                            ]
                        }
                    ],
                    "data": {}
                },
                {
                    "templateId": 9,
                    "templateType": "Fms",
                    "title": "Functional Movement Screen",
                    "idPrefix": "functional-movement-screen-",
                    "totalQuestions": 24,
                    "totalCompletedQuestions": 0,
                    "formSchema": {
                        "fms01": {
                            "type": "Select",
                            "title": "Overhead Deep Squat",
                            "options": [
                                {"val": "fms01-1", "label": "0"},
                                {"val": "fms01-2", "label": "1"},
                                {"val": "fms01-3", "label": "2"},
                                {"val": "fms01-4", "label": "3"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "fms02": {"type": "Text", "title": "Notes", "options": null, "validators": [], "help": null},
                        "fms03": {
                            "type": "Select",
                            "title": "Hurdle Step (R)",
                            "options": [
                                {"val": "fms03-1", "label": "0"},
                                {"val": "fms03-2", "label": "1"},
                                {"val": "fms03-3", "label": "2"},
                                {"val": "fms03-4", "label": "3"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "fms04": {
                            "type": "Select",
                            "title": "Hurdle Step (L)",
                            "options": [
                                {"val": "fms04-1", "label": "0"},
                                {"val": "fms04-2", "label": "1"},
                                {"val": "fms04-3", "label": "2"},
                                {"val": "fms04-4", "label": "3"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "fms05": {
                            "type": "Number",
                            "title": "Floor to Tibial Tuberosity",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": null
                        },
                        "fms06": {"type": "Text", "title": "Notes", "options": null, "validators": [], "help": null},
                        "fms07": {
                            "type": "Select",
                            "title": "In-line Lunge (R)",
                            "options": [
                                {"val": "fms07-1", "label": "0"},
                                {"val": "fms07-2", "label": "1"},
                                {"val": "fms07-3", "label": "2"},
                                {"val": "fms07-4", "label": "3"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "fms08": {
                            "type": "Select",
                            "title": "In-line Lunge (L)",
                            "options": [
                                {"val": "fms08-1", "label": "0"},
                                {"val": "fms08-2", "label": "1"},
                                {"val": "fms08-3", "label": "2"},
                                {"val": "fms08-4", "label": "3"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "fms09": {"type": "Text", "title": "Notes", "options": null, "validators": [], "help": null},
                        "fms10": {
                            "type": "Select",
                            "title": "Shoulder Mobility (R)",
                            "options": [
                                {"val": "fms10-1", "label": "0"},
                                {"val": "fms10-2", "label": "1"},
                                {"val": "fms10-3", "label": "2"},
                                {"val": "fms10-4", "label": "3"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "fms11": {
                            "type": "Select",
                            "title": "Shoulder Mobility (L)",
                            "options": [
                                {"val": "fms11-1", "label": "0"},
                                {"val": "fms11-2", "label": "1"},
                                {"val": "fms11-3", "label": "2"},
                                {"val": "fms11-4", "label": "3"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "fms12": {
                            "type": "Select",
                            "title": "Distal Wrist Crease to tip of 3rd finger",
                            "options": [
                                {"val": "fms12-1", "label": "0"},
                                {"val": "fms12-2", "label": "1"},
                                {"val": "fms12-3", "label": "2"},
                                {"val": "fms12-4", "label": "3"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "fms13": {
                            "type": "Number",
                            "title": "Pain Clearance (Was there pain?)",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": null
                        },
                        "fms14": {"type": "Text", "title": "Notes", "options": null, "validators": [], "help": null},
                        "fms15": {
                            "type": "Select",
                            "title": "Active Straight Leg Raise (R)",
                            "options": [
                                {"val": "fms15-1", "label": "0"},
                                {"val": "fms15-2", "label": "1"},
                                {"val": "fms15-3", "label": "2"},
                                {"val": "fms15-4", "label": "3"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "fms16": {
                            "type": "Select",
                            "title": "Active Straight Leg Raise (L)",
                            "options": [
                                {"val": "fms16-1", "label": "0"},
                                {"val": "fms16-2", "label": "1"},
                                {"val": "fms16-3", "label": "2"},
                                {"val": "fms16-4", "label": "3"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "fms17": {"type": "Text", "title": "Notes", "options": null, "validators": [], "help": null},
                        "fms18": {
                            "type": "Select",
                            "title": "Trunk Stability Pushup",
                            "options": [
                                {"val": "fms18-1", "label": "0"},
                                {"val": "fms18-2", "label": "1"},
                                {"val": "fms18-3", "label": "2"},
                                {"val": "fms18-4", "label": "3"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "fms19": {
                            "type": "Number",
                            "title": "Pain Clearance (Was there pain?)",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": null
                        },
                        "fms20": {"type": "Text", "title": "Notes", "options": null, "validators": [], "help": null},
                        "fms21": {
                            "type": "Select",
                            "title": "Rotary Stability (R)",
                            "options": [
                                {"val": "fms21-1", "label": "0"},
                                {"val": "fms21-2", "label": "1"},
                                {"val": "fms21-3", "label": "2"},
                                {"val": "fms21-4", "label": "3"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "fms22": {
                            "type": "Select",
                            "title": "Rotary Stability (L)",
                            "options": [
                                {"val": "fms22-1", "label": "0"},
                                {"val": "fms22-2", "label": "1"},
                                {"val": "fms22-3", "label": "2"},
                                {"val": "fms22-4", "label": "3"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "fms23": {
                            "type": "Number",
                            "title": "Pain Clearance (Was there pain?)",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": null
                        },
                        "fms24": {"type": "Text", "title": "Notes", "options": null, "validators": [], "help": null}
                    },
                    "fieldsets": [
                        {
                            "legend": "Functional Movement",
                            "fields": [
                                "fms01",
                                "fms02",
                                "fms03",
                                "fms04",
                                "fms05",
                                "fms06",
                                "fms07",
                                "fms08",
                                "fms09",
                                "fms10",
                                "fms11",
                                "fms12",
                                "fms13",
                                "fms14",
                                "fms15",
                                "fms16",
                                "fms17",
                                "fms18",
                                "fms19",
                                "fms20",
                                "fms21",
                                "fms22",
                                "fms23",
                                "fms24"
                            ]
                        }
                    ],
                    "data": {}
                },

                {
                    "templateId": 10,
                    "templateType": "Equistretch",
                    "title": "Equistretch",
                    "idPrefix": "equistretch-",
                    "totalQuestions": 14,
                    "totalCompletedQuestions": 0,
                    "formSchema": {
                        "equistretch01": {
                            "type": "Radio",
                            "title": "Seated Cervical Flexion",
                            "options": [
                                {"val": "equistretch01-1", "label": "Excellent"},
                                {"val": "equistretch01-2", "label": "Satisifactory"},
                                {"val": "equistretch01-3", "label": "Needs Improvement"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "equistretch02": {
                            "type": "Radio",
                            "title": "Seated Cervical Extension",
                            "options": [
                                {"val": "equistretch02-1", "label": "Excellent"},
                                {"val": "equistretch02-2", "label": "Satisifactory"},
                                {"val": "equistretch02-3", "label": "Needs Improvement"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "equistretch03": {
                            "type": "Radio",
                            "title": "Seated Cervical Rotation",
                            "options": [
                                {"val": "equistretch03-1", "label": "Excellent"},
                                {"val": "equistretch03-2", "label": "Satisifactory"},
                                {"val": "equistretch03-3", "label": "Needs Improvement"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "equistretch04": {
                            "type": "Radio",
                            "title": "Seated Cervical Side Bending",
                            "options": [
                                {"val": "equistretch04-1", "label": "Excellent"},
                                {"val": "equistretch04-2", "label": "Satisifactory"},
                                {"val": "equistretch04-3", "label": "Needs Improvement"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "equistretch05": {
                            "type": "Radio",
                            "title": "Seated Shoulder Elevation",
                            "options": [
                                {"val": "equistretch05-1", "label": "Excellent"},
                                {"val": "equistretch05-2", "label": "Satisifactory"},
                                {"val": "equistretch05-3", "label": "Needs Improvement"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "equistretch06": {
                            "type": "Radio",
                            "title": "Seated Hands Behind Head",
                            "options": [
                                {"val": "equistretch06-1", "label": "Excellent"},
                                {"val": "equistretch06-2", "label": "Satisifactory"},
                                {"val": "equistretch06-3", "label": "Needs Improvement"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "equistretch07": {
                            "type": "Radio",
                            "title": "Seated Hands Behind Back",
                            "options": [
                                {"val": "equistretch07-1", "label": "Excellent"},
                                {"val": "equistretch07-2", "label": "Satisifactory"},
                                {"val": "equistretch07-3", "label": "Needs Improvement"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "equistretch08": {
                            "type": "Radio",
                            "title": "Supine Lat Length",
                            "options": [
                                {"val": "equistretch08-1", "label": "Excellent"},
                                {"val": "equistretch08-2", "label": "Satisifactory"},
                                {"val": "equistretch08-3", "label": "Needs Improvement"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "equistretch09": {
                            "type": "Radio",
                            "title": "Supine Hip Flexor",
                            "options": [
                                {"val": "equistretch09-1", "label": "Excellent"},
                                {"val": "equistretch09-2", "label": "Satisifactory"},
                                {"val": "equistretch09-3", "label": "Needs Improvement"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "equistretch10": {
                            "type": "Radio",
                            "title": "Supine Adductor Length",
                            "options": [
                                {"val": "equistretch10-1", "label": "Excellent"},
                                {"val": "equistretch10-2", "label": "Satisifactory"},
                                {"val": "equistretch10-3", "label": "Needs Improvement"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "equistretch11": {
                            "type": "Radio",
                            "title": "Supine Gastroc Length",
                            "options": [
                                {"val": "equistretch11-1", "label": "Excellent"},
                                {"val": "equistretch11-2", "label": "Satisifactory"},
                                {"val": "equistretch11-3", "label": "Needs Improvement"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "equistretch12": {
                            "type": "Radio",
                            "title": "Side Lying ITB Length (Ober's Test)",
                            "options": [
                                {"val": "equistretch12-1", "label": "Excellent"},
                                {"val": "equistretch12-2", "label": "Satisifactory"},
                                {"val": "equistretch12-3", "label": "Needs Improvement"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "equistretch13": {
                            "type": "Radio",
                            "title": "Prone Knee Flexion (Ely's Test)",
                            "options": [
                                {"val": "equistretch13-1", "label": "Excellent"},
                                {"val": "equistretch13-2", "label": "Satisifactory"},
                                {"val": "equistretch13-3", "label": "Needs Improvement"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        },
                        "equistretch14": {
                            "type": "Radio",
                            "title": "Prone Soleus Lenght",
                            "options": [
                                {"val": "equistretch14-1", "label": "Excellent"},
                                {"val": "equistretch14-2", "label": "Satisifactory"},
                                {"val": "equistretch14-3", "label": "Needs Improvement"}
                            ],
                            "validators": [{"type": "required", "message": "Please select one.", "regex": null}],
                            "help": null
                        }
                    },
                    "fieldsets": [
                        {
                            "legend": "Equistretch",
                            "fields": [
                                "equistretch01",
                                "equistretch02",
                                "equistretch03",
                                "equistretch04",
                                "equistretch05",
                                "equistretch06",
                                "equistretch07",
                                "equistretch08",
                                "equistretch09",
                                "equistretch10",
                                "equistretch11",
                                "equistretch12",
                                "equistretch13",
                                "equistretch14"
                            ]
                        }
                    ],
                    "data": {}
                },

                {
                    "templateId": 11,
                    "templateType": "PerformanceTesting",
                    "title": "Performance Testing",
                    "idPrefix": "performance-testing-",
                    "totalQuestions": 10,
                    "totalCompletedQuestions": 0,
                    "formSchema": {
                        "performancetesting01": {
                            "type": "Number",
                            "title": "Leg Press (10 RM)",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "lbs"
                        },
                        "performancetesting02": {
                            "type": "Number",
                            "title": "Chest Press (10 RM)",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "lbs"
                        },
                        "performancetesting03": {
                            "type": "Number",
                            "title": "Push Ups Test",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "total number completed"
                        },
                        "performancetesting04": {
                            "type": "Number",
                            "title": "Bruce Treadmill Protocol - HR at the end of stage 1",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "bpm"
                        },
                        "performancetesting05": {
                            "type": "Number",
                            "title": "Bruce Treadmill Protocol - HR at the end of stage 2",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "bpm"
                        },
                        "performancetesting06": {
                            "type": "Number",
                            "title": "Bruce Treadmill Protocol - HR at the end of stage 3",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "bpm"
                        },
                        "performancetesting07": {
                            "type": "Number",
                            "title": "Bruce Treadmill Protocol - HR at the end of stage 4",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "bpm"
                        },
                        "performancetesting08": {
                            "type": "Number",
                            "title": "Bruce Treadmill Protocol - HR at the end of stage 5",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "bpm"
                        },
                        "performancetesting09": {
                            "type": "Number",
                            "title": "Bruce Treadmill Protocol - HR at the end of stage 6",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": "bpm"
                        },
                        "performancetesting10": {
                            "type": "Text",
                            "title": "Final Stage / Total Time / HR at time of Stop",
                            "options": null,
                            "validators": [{"type": "required", "message": "The field is required.", "regex": null}],
                            "help": null
                        }
                    },
                    "fieldsets": [
                        {
                            "legend": "Performance Testing",
                            "fields": [
                                "performancetesting01",
                                "performancetesting02",
                                "performancetesting03",
                                "performancetesting04",
                                "performancetesting05",
                                "performancetesting06",
                                "performancetesting07",
                                "performancetesting08",
                                "performancetesting09",
                                "performancetesting10"
                            ]
                        }
                    ],
                    "data": {}
                },

                {
                    "templateId": 12,
                    "templateType": 2,
                    "title": "Physical Test",
                    "idPrefix": "physical-test-",
                    "totalQuestions": 5,
                    "totalCompletedQuestions": 5,
                    "formSchema": {
                        "title": {
                            "type": "Select",
                            "options": [
                                "",
                                "Mr",
                                "Mrs",
                                "Ms"
                            ]
                        },
                        "name": "Text",
                        "email": {
                            "validators": [
                                "required",
                                "email"
                            ]
                        },

                        "address": {
                            "type": "Text",
                            "title": "Address 1",
                            "validators": ["required"]
                        },

                        "city": {
                            "type": "Text",
                            "validators": ["required"]
                        },

                        "state": {
                            "type": "Select",
                            "options": [
                                "",
                                "AR",
                                "CT",
                                "NJ",
                                "NY"
                            ]
                        },

                        "zip": {
                            "type": "Text",
                            "validators": ["required"]
                        }
                    },

                    "fieldsets": [
                        {
                            "legend": "Member Information",
                            "fields": [
                                "title",
                                "name",
                                "email"
                            ]
                        },
                        {
                            "legend": "Address",
                            "fields": [
                                "address",
                                "city",
                                "state",
                                "zip"
                            ]
                        }
                    ],

                    "data": {}
                }
            ];

        var formTemplate = _.find(mockUp, function(item) {
            return item.templateId === req.body.templateId;
        });

        var newForm = new models.Form(_.extend(req.body, formTemplate));

        newForm.save(function (err, form) {
            if (err) {
                res.json({error: 'Error adding form.'});
            } else {
                console.log('response on post ', form);
                res.json(form);
            }


        });
    },

    updateDocument: function (req, res) {
        'use strict';

        var obj = req.body;
        var id = obj._id;
        delete obj._id;
        if (id) {
            models.Form.update({_id: id}, obj, function (err, data) {
                if (err) {
                    res.json({error: 'Error saving document.'});
                } else {
                    console.log('PUT DATA', data);
                    console.log('Updated document', obj);
                    res.json(obj);
                }
            });
        }
    }
};