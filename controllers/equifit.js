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
                        isSubmitted: false,
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
            isSubmitted: false,
            documents: [
                {
                    templateId: 1,
                    title: 'Informed Consent',
                    templateType: 'InformedConsent',
                    totalQuestions: 1,
                    totalCompletedQuestions: 0
                },

                {
                    title: 'Personal Information',
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
                    // two sucess messages depends on Client response isSubmitted
                    if (obj.isSubmitted) {
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
                                    title: 'Personal Information',
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
                templateId: 1,
                title: "Informed Consent",
                templateType: "InformedConsent",
                totalQuestions: 1,
                totalCompletedQuestions: 0,
                formSchema: {
                    consent01: {
                        type: "Text",
                        fieldClass: "odd",
                        titleHTML: "<p>I have read this form, and I understand the test procedures I will perform. I consent to participate in the Equifit and understand that the information obtained during this evaluation may be used for statistical purposes</p> First and last initial",
                        validators: ["required"]
                    }
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
                ],

                parent: {
                    appointmentAt: null,
                    updatedAt: null,
                    trainerName: 'Johnny Cash',
                    trainerFacility: 'Tribeca',
                    clientName: 'Donna Summer',
                    clientId: 100000,
                    isSigned: false,
                    isSubmitted: false,
                    documents: []
                }
            },

            {
                title: "Personal Information",
                templateId: 2,
                templateType: "PersonalInformation",
                totalQuestions: 5,
                totalCompletedQuestions: 2,
                formSchema: {
                    personal01: {
                        "type": "Text",
                        "title": "Trainer First & Last Name"
                    },
                    personal03: {
                        type: "Select",
                        title: "Gender",
                        options: [
                            {"val": "", "label": "Select"},
                            {"val": "personal04-1", "label": "Male"},
                            {"val": "personal04-2", "label": "Female"}
                        ]
                    },

                    personal04: {
                        type: "Select",
                        title: "Age",
                        options: [
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
                        ]
                    },

                    personal05: {
                        type: "Date",
                        title: "Date of Equifit",
                        yearStart: new Date().getFullYear() - 2,
                        yearEnd: new Date().getFullYear() + 2
                    },
                    personal06: {
                        type: "Select",
                        title: "Club",
                        options: [
                            {"val": "", "label": "Select"},
                            {"val": "broadway", "label": "19 Street"},
                            {"val": "tribeca", "label": "Tribeca"},
                            {"val": "westside", "label": "West Side"},
                            {"val": "es", "label": "East Side"},
                            {"val": "les", "label": "Lower East Side"}
                        ]
                    }
                },

                fieldsets: [
                    {
                        legend: "I am",
                        fields: ["personal01"]
                    },
                    {
                        legend: "REPLACE_ME_WITH_CLIENT_NAME",
                        fields: [
                            "personal03",
                            "personal04"
                        ]
                    },

                    {
                        legend: "Date of Equifit",
                        fields: [
                            "personal05",
                            "personal06"
                        ]
                    }
                ]
            },
            {
                title: "Medical/Orthopedic HX",
                templateId: 3,
                templateType: "MedicalOrthopedic",
                totalQuestions: 11,
                totalCompletedQuestions: 0,
                formSchema: {
                    medical01: {
                        type: "Radio",
                        title: "Do you experience an irregular or racing heart rate during rest or exercise?",
                        options: [
                            {"val": "medical01-1", "label": "Yes"},
                            {"val": "medical01-2", "label": "No"}
                        ],
                        help: "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                        fieldAttrs: {
                            "data-bind": "radio",
                            "data-target": "help-block",
                            "data-condition": "medical01-1"
                        }
                    },
                    medical02: {
                        type: "Radio",
                        title: "Has a doctor ever said you have a heart condition and that you should only do physical activity recommended by a doctor?",
                        options: [
                            {val: "medical02-1", label: "Yes"},
                            {val: "medical02-2", label: "No"}
                        ],
                        help: "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                        fieldAttrs: {
                            "data-bind": "radio",
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
                        "help": "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                        "fieldAttrs": {
                            "data-bind": "radio",
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
                        "help": "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                        "fieldAttrs": {
                            "data-bind": "radio",
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
                        "help": "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                        "fieldAttrs": {
                            "data-bind": "radio",
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
                        "help": "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                        "fieldAttrs": {
                            "data-bind": "radio",
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
                        "help": "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                        "fieldAttrs": {
                            "data-bind": "radio",
                            "data-target": "help-block",
                            "data-condition": "medical07-1"
                        }
                    },


                    body01: {
                        type: "Radio",
                        title: "Do you know of any other reason why you should not do physical activity?",
                        options: [
                            {val: "body-1", label: "Yes"},
                            {val: "body-2", label: "No"}
                        ],
                        help: "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                        fieldAttrs: {
                            "data-bind": "radio",
                            "data-target": "help-block",
                            "data-condition": "body-1"
                        }
                    },


                    headOrNeck: {
                        type: "Checkboxes",
                        title: null,
                        options: [{val: 'headOrNeckExtra', label: 'Head or Neck'}],
                        fieldAttrs: {
                            "data-bind": "checkbox",
                            "data-condition": "headOrNeckExtra"
                        }
                    },

                    headOrNeckExtra: {
                        type: 'Object',
                        title: null,
                        subSchema: {
                            area: {
                                type: 'TextArea',
                                title: "Area (Left, Right / Upper, Mid, Lower)"
                            },
                            when: {
                                type: 'TextArea',
                                title: "When it happened?"
                            },
                            how: {
                                type: 'TextArea',
                                title: "How did it happened?"
                            },

                            rehub: {
                                type: 'TextArea',
                                title: "Rehub status?"
                            },
                            clearance: {
                                type: "Radio",
                                title: "Clearance for Exercise?",
                                options: [{
                                    val: "yes",
                                    label: "Yes"
                                }, {
                                    val: "no",
                                    label: "No"
                                }]
                            },
                            pain: {
                                type: "Radio",
                                title: "Any pain?",
                                options: [{
                                    val: "yes",
                                    label: "Yes"
                                }, {
                                    val: "no",
                                    label: "No"
                                }]
                            }
                        }
                    },

                    shoulder: {
                        type: "Checkboxes",
                        title: null,
                        options: [{val: 'shoulderExtra', label: 'Shoulder'}],
                        fieldAttrs: {
                            "data-bind": "checkbox",
                            "data-condition": "shoulderExtra"
                        }
                    },

                    shoulderExtra: {
                        type: 'Object',
                        title: null,
                        subSchema: {
                            area: {
                                type: 'TextArea',
                                title: "Area (Left, Right / Upper, Mid, Lower)"
                            },
                            when: {
                                type: 'TextArea',
                                title: "When it happened?"
                            },
                            how: {
                                type: 'TextArea',
                                title: "How did it happened?"
                            },

                            rehub: {
                                type: 'TextArea',
                                title: "Rehub status?"
                            },
                            clearance: {
                                type: "Radio",
                                title: "Clearance for Exercise?",
                                options: [{
                                    val: "yes",
                                    label: "Yes"
                                }, {
                                    val: "no",
                                    label: "No"
                                }]
                            },
                            pain: {
                                type: "Radio",
                                title: "Any pain?",
                                options: [{
                                    val: "yes",
                                    label: "Yes"
                                }, {
                                    val: "no",
                                    label: "No"
                                }]
                            }
                        }
                    },

                    arm: {
                        type: "Checkboxes",
                        title: null,
                        options: [{val: 'armExtra', label: 'Arm'}],
                        fieldAttrs: {
                            "data-bind": "checkbox",
                            "data-condition": "armExtra"
                        }
                    },

                    armExtra: {
                        type: 'Object',
                        title: null,
                        subSchema: {
                            area: {
                                type: 'TextArea',
                                title: "Area (Left, Right / Upper, Mid, Lower)"
                            },
                            when: {
                                type: 'TextArea',
                                title: "When it happened?"
                            },
                            how: {
                                type: 'TextArea',
                                title: "How did it happened?"
                            },

                            rehub: {
                                type: 'TextArea',
                                title: "Rehub status?"
                            },
                            clearance: {
                                type: "Radio",
                                title: "Clearance for Exercise?",
                                options: [{
                                    val: "yes",
                                    label: "Yes"
                                }, {
                                    val: "no",
                                    label: "No"
                                }]
                            },
                            pain: {
                                type: "Radio",
                                title: "Any pain?",
                                options: [{
                                    val: "yes",
                                    label: "Yes"
                                }, {
                                    val: "no",
                                    label: "No"
                                }]
                            }
                        }
                    },


                    wristOrHand: {
                        type: "Checkboxes",
                        title: null,
                        options: [{val: 'wristOrHandExtra', label: 'Wrist or Hand'}],
                        fieldAttrs: {
                            "data-bind": "checkbox",
                            "data-condition": "wristOrHandExtra"
                        }
                    },

                    wristOrHandExtra: {
                        type: 'Object',
                        title: null,
                        subSchema: {
                            area: {
                                type: 'TextArea',
                                title: "Area (Left, Right / Upper, Mid, Lower)"
                            },
                            when: {
                                type: 'TextArea',
                                title: "When it happened?"
                            },
                            how: {
                                type: 'TextArea',
                                title: "How did it happened?"
                            },

                            rehub: {
                                type: 'TextArea',
                                title: "Rehub status?"
                            },
                            clearance: {
                                type: "Radio",
                                title: "Clearance for Exercise?",
                                options: [{
                                    val: "yes",
                                    label: "Yes"
                                }, {
                                    val: "no",
                                    label: "No"
                                }]
                            },
                            pain: {
                                type: "Radio",
                                title: "Any pain?",
                                options: [{
                                    val: "yes",
                                    label: "Yes"
                                }, {
                                    val: "no",
                                    label: "No"
                                }]
                            }
                        }
                    },


                    back: {
                        type: "Checkboxes",
                        title: null,
                        options: [{val: 'backExtra', label: 'Back'}],
                        fieldAttrs: {
                            "data-bind": "checkbox",
                            "data-condition": "backExtra"
                        }
                    },

                    backExtra: {
                        type: 'Object',
                        title: null,
                        subSchema: {
                            area: {
                                type: 'TextArea',
                                title: "Area (Left, Right / Upper, Mid, Lower)"
                            },
                            when: {
                                type: 'TextArea',
                                title: "When it happened?"
                            },
                            how: {
                                type: 'TextArea',
                                title: "How did it happened?"
                            },

                            rehub: {
                                type: 'TextArea',
                                title: "Rehub status?"
                            },
                            clearance: {
                                type: "Radio",
                                title: "Clearance for Exercise?",
                                options: [{
                                    val: "yes",
                                    label: "Yes"
                                }, {
                                    val: "no",
                                    label: "No"
                                }]
                            },
                            pain: {
                                type: "Radio",
                                title: "Any pain?",
                                options: [{
                                    val: "yes",
                                    label: "Yes"
                                }, {
                                    val: "no",
                                    label: "No"
                                }]
                            }
                        }
                    },


                    hip: {
                        type: "Checkboxes",
                        title: null,
                        options: [{val: 'hipExtra', label: 'Hip'}],
                        fieldAttrs: {
                            "data-bind": "checkbox",
                            "data-condition": "hipExtra"
                        }
                    },

                    hipExtra: {
                        type: 'Object',
                        title: null,
                        subSchema: {
                            area: {
                                type: 'TextArea',
                                title: "Area (Left, Right / Upper, Mid, Lower)"
                            },
                            when: {
                                type: 'TextArea',
                                title: "When it happened?"
                            },
                            how: {
                                type: 'TextArea',
                                title: "How did it happened?"
                            },

                            rehub: {
                                type: 'TextArea',
                                title: "Rehub status?"
                            },
                            clearance: {
                                type: "Radio",
                                title: "Clearance for Exercise?",
                                options: [{
                                    val: "yes",
                                    label: "Yes"
                                }, {
                                    val: "no",
                                    label: "No"
                                }]
                            },
                            pain: {
                                type: "Radio",
                                title: "Any pain?",
                                options: [{
                                    val: "yes",
                                    label: "Yes"
                                }, {
                                    val: "no",
                                    label: "No"
                                }]
                            }
                        }
                    },


                    leg: {
                        type: "Checkboxes",
                        title: null,
                        options: [{val: 'legExtra', label: 'Leg'}],
                        fieldAttrs: {
                            "data-bind": "checkbox",
                            "data-condition": "legExtra"
                        }
                    },

                    legExtra: {
                        type: 'Object',
                        title: null,
                        subSchema: {
                            area: {
                                type: 'TextArea',
                                title: "Area (Left, Right / Upper, Mid, Lower)"
                            },
                            when: {
                                type: 'TextArea',
                                title: "When it happened?"
                            },
                            how: {
                                type: 'TextArea',
                                title: "How did it happened?"
                            },

                            rehub: {
                                type: 'TextArea',
                                title: "Rehub status?"
                            },
                            clearance: {
                                type: "Radio",
                                title: "Clearance for Exercise?",
                                options: [{
                                    val: "yes",
                                    label: "Yes"
                                }, {
                                    val: "no",
                                    label: "No"
                                }]
                            },
                            pain: {
                                type: "Radio",
                                title: "Any pain?",
                                options: [{
                                    val: "yes",
                                    label: "Yes"
                                }, {
                                    val: "no",
                                    label: "No"
                                }]
                            }
                        }
                    },

                    knee: {
                        type: "Checkboxes",
                        title: null,
                        options: [{val: 'kneeExtra', label: 'Knee'}],
                        fieldAttrs: {
                            "data-bind": "checkbox",
                            "data-condition": "kneeExtra"
                        }
                    },

                    kneeExtra: {
                        type: 'Object',
                        title: null,
                        subSchema: {
                            area: {
                                type: 'TextArea',
                                title: "Area (Left, Right / Upper, Mid, Lower)"
                            },
                            when: {
                                type: 'TextArea',
                                title: "When it happened?"
                            },
                            how: {
                                type: 'TextArea',
                                title: "How did it happened?"
                            },

                            rehub: {
                                type: 'TextArea',
                                title: "Rehub status?"
                            },
                            clearance: {
                                type: "Radio",
                                title: "Clearance for Exercise?",
                                options: [{
                                    val: "yes",
                                    label: "Yes"
                                }, {
                                    val: "no",
                                    label: "No"
                                }]
                            },
                            pain: {
                                type: "Radio",
                                title: "Any pain?",
                                options: [{
                                    val: "yes",
                                    label: "Yes"
                                }, {
                                    val: "no",
                                    label: "No"
                                }]
                            }
                        }
                    },
                    ankleFoot: {
                        type: "Checkboxes",
                        title: null,
                        options: [{val: 'ankleFootExtra', label: 'Ankle/Foot'}],
                        fieldAttrs: {
                            "data-bind": "checkbox",
                            "data-condition": "ankleFootExtra"
                        }
                    },

                    ankleFootExtra: {
                        type: 'Object',
                        title: null,
                        subSchema: {
                            area: {
                                type: 'TextArea',
                                title: "Area (Left, Right / Upper, Mid, Lower)"
                            },
                            when: {
                                type: 'TextArea',
                                title: "When it happened?"
                            },
                            how: {
                                type: 'TextArea',
                                title: "How did it happened?"
                            },

                            rehub: {
                                type: 'TextArea',
                                title: "Rehub status?"
                            },
                            clearance: {
                                type: "Radio",
                                title: "Clearance for Exercise?",
                                options: [{
                                    val: "yes",
                                    label: "Yes"
                                }, {
                                    val: "no",
                                    label: "No"
                                }]
                            },
                            pain: {
                                type: "Radio",
                                title: "Any pain?",
                                options: [{
                                    val: "yes",
                                    label: "Yes"
                                }, {
                                    val: "no",
                                    label: "No"
                                }]
                            }
                        }
                    },

                    anyOther: {
                        type: "Checkboxes",
                        title: null,
                        options: [{val: 'anyOtherExtra', label: 'Any Other'}],
                        fieldAttrs: {
                            "data-bind": "checkbox",
                            "data-condition": "anyOtherExtra"
                        }
                    },

                    anyOtherExtra: {
                        type: 'Object',
                        title: null,
                        subSchema: {
                            area: {
                                type: 'TextArea',
                                title: "Area (Left, Right / Upper, Mid, Lower)"
                            },
                            when: {
                                type: 'TextArea',
                                title: "When it happened?"
                            },
                            how: {
                                type: 'TextArea',
                                title: "How did it happened?"
                            },

                            rehub: {
                                type: 'TextArea',
                                title: "Rehub status?"
                            },
                            clearance: {
                                type: "Radio",
                                title: "Clearance for Exercise?",
                                options: [{
                                    val: "yes",
                                    label: "Yes"
                                }, {
                                    val: "no",
                                    label: "No"
                                }]
                            },
                            pain: {
                                type: "Radio",
                                title: "Any pain?",
                                options: [{
                                    val: "yes",
                                    label: "Yes"
                                }, {
                                    val: "no",
                                    label: "No"
                                }]
                            }
                        }
                    },


                    "medical08": {
                        "type": "Radio",
                        "title": "Are you over 65 and not accustomed to vigorous exercise?",
                        "options": [
                            {"val": "medical08-1", "label": "Yes"},
                            {"val": "medical08-2", "label": "No"}
                        ],
                        "help": "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                        "fieldAttrs": {
                            "data-bind": "radio",
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
                        "help": "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                        "fieldAttrs": {
                            "data-bind": "radio",
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
                        "help": "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                        "fieldAttrs": {
                            "data-bind": "radio",
                            "data-target": "help-block",
                            "data-condition": "medical10-1"
                        }
                    },
                    "medical11": {
                        "type": "Text",
                        "title": "Is there anything you would specifically like to learn about youself during the Equifit?",
                        "options": null,
                        "help": "we recommend that you see a doctor before your Equifit or before you begin an exercise program.",
                        "fieldAttrs": {
                            "data-bind": "radio",
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
                    {
                        "legend": "Body Injury",
                        "fields": [
                            "body01",
                            "headOrNeck",
                            "headOrNeckExtra",
                            "shoulder",
                            "shoulderExtra",
                            "arm",
                            "armExtra",
                            "wristOrHand",
                            "wristOrHandExtra",
                            "back",
                            "backExtra",
                            "hip",
                            "hipExtra",
                            "leg",
                            "legExtra",
                            "knee",
                            "kneeExtra",
                            "ankleFoot",
                            "ankleFootExtra",
                            "anyOther",
                            "anyOtherExtra"
                        ]
                    },
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
                "data": {},

                "parent": {
                    appointmentAt: null,
                    updatedAt: null,
                    trainerName: 'Johnny Cash',
                    trainerFacility: 'Tribeca',
                    clientName: 'Donna Summer',
                    clientId: 100000,
                    isSigned: false,
                    isSubmitted: false,
                    documents: [
                        {
                            templateId: 1,
                            title: 'Informed Consent',
                            templateType: 'InformedConsent',
                            totalQuestions: 1,
                            totalCompletedQuestions: 0
                        },

                        {
                            title: 'Personal Information',
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
                }
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
                        "help": null
                    },
                    "lifestyle02": {
                        "type": "Radio",
                        "title": "Do you feel exercise helps you in managing your stress?",
                        "options": [
                            {"val": "lifestyle02-1", "label": "Yes"},
                            {"val": "lifestyle02-2", "label": "No"}
                        ],
                        "help": null
                    },
                    "lifestyle03": {
                        "type": "Text",
                        "title": "Describe your typical daily nutritional habits?",
                        "options": null,
                        "help": "Number of times you eat per day and basic content of diet"
                    },
                    "lifestyle04": {
                        "type": "Radio",
                        "title": "Do you feel you need to change anything with regards to your nutrition?",
                        "options": [
                            {"val": "lifestyle04-1", "label": "Yes"},
                            {"val": "lifestyle04-2", "label": "No"}
                        ],
                        "help": null
                    },
                    "lifestyle05": {
                        "type": "Text",
                        "title": "What types of liquids do you typically drink?",
                        "options": null,
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
                        "help": "Number in glasses. One glass = 8 fluid ounces."
                    },
                    "lifestyle07": {
                        "type": "Text",
                        "title": "Before we get started with assessments, do you have any additional comments or is there anything we did not cover?",
                        "options": null,
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
                        "help": null
                    },
                    "exercisehistory03": {
                        "type": "Radio",
                        "title": "Do you or have you ever strength trained? (free weights / machines / body wieght)",
                        "options": [
                            {"val": "exercisehistory03-1", "label": "Yes"},
                            {"val": "exercisehistory03-2", "label": "No"}
                        ],
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
                        "help": null
                    },
                    "goals02": {
                        "type": "Text",
                        "title": "Fitness goal #2",
                        "options": null,
                        "help": null
                    },
                    "goals03": {
                        "type": "Text",
                        "title": "Fitness goal #3",
                        "options": null,
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
                        "help": null
                    },
                    "goals06": {
                        "type": "Date",
                        "title": "When would you like to achieve it by?",
                        "options": null,
                        "help": null
                    },
                    "goals07": {
                        "type": "Text",
                        "title": "Why would you like to achieve this goal?",
                        "options": null,
                        "help": null
                    },
                    "goals08": {
                        "type": "Text",
                        "title": "What is the biggest challenge getting in your way of achieving each of these goals?",
                        "options": null,
                        "help": null
                    },
                    "goals09": {
                        "type": "Text",
                        "title": "What strategies in the past have you utilized to overcome these challenges, if any?",
                        "options": null,
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
                        "help": null
                    },
                    "goals11": {
                        "type": "Text",
                        "title": "Notes / Strategy Ideas",
                        "options": null,
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
                        "help": null
                    },
                    "regeneration02": {
                        "type": "Radio",
                        "title": "Do you feel you need to change anything with regards to your nutrition?",
                        "options": [
                            {"val": "regeneration02-1", "label": "Yes"},
                            {"val": "regeneration02-2", "label": "No"}
                        ],
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
                        "help": "ft, in"
                    },
                    "bodymeasurements02": {
                        "type": "Number",
                        "title": "Weight",
                        "options": null,
                        "help": "lbs"
                    },
                    "bodymeasurements03": {
                        "type": "Number",
                        "title": "Resting Heart Rate",
                        "options": null,
                        "help": "bpm"
                    },
                    "bodymeasurements04": {
                        "type": "Number",
                        "title": "Blood Pressure",
                        "options": null,
                        "help": null
                    },
                    "bodymeasurements05": {
                        "type": "Number",
                        "title": "Right Upper Arm Circumference",
                        "options": null,
                        "help": "in"
                    },
                    "bodymeasurements06": {
                        "type": "Number",
                        "title": "Right Upper Arm Circumference",
                        "options": null,
                        "help": "in"
                    },
                    "bodymeasurements07": {
                        "type": "Number",
                        "title": "Left Upper Arm Circumference",
                        "options": null,
                        "help": "in"
                    },
                    "bodymeasurements08": {
                        "type": "Number",
                        "title": "Chest Circumference",
                        "options": null,
                        "help": "in"
                    },
                    "bodymeasurements09": {
                        "type": "Number",
                        "title": "Waist Circumference",
                        "options": null,
                        "help": "in"
                    },
                    "bodymeasurements10": {
                        "type": "Number",
                        "title": "Abdominal Circumference",
                        "options": null,
                        "help": "in"
                    },
                    "bodymeasurements11": {
                        "type": "Number",
                        "title": "Hip Circumference",
                        "options": null,
                        "help": "in"
                    },
                    "bodymeasurements12": {
                        "type": "Number",
                        "title": "Right Mid Thigh Circumference",
                        "options": null,
                        "help": "in"
                    },
                    "bodymeasurements13": {
                        "type": "Number",
                        "title": "Left Mid Thigh Circumference",
                        "options": null,
                        "help": "in"
                    },
                    "bodymeasurements14": {
                        "type": "Number",
                        "title": "Skinfold Measurement - Tricep",
                        "options": null,
                        "help": "mm"
                    },
                    "bodymeasurements15": {
                        "type": "Number",
                        "title": "Skinfold Measurement - Abdomen",
                        "options": null,
                        "help": "mm"
                    },
                    "bodymeasurements16": {
                        "type": "Number",
                        "title": "Skinfold Measurement - Suprailiac",
                        "options": null,
                        "help": "mm"
                    },
                    "bodymeasurements17": {
                        "type": "Number",
                        "title": "Skinfold Measurement - Mid Thigh",
                        "options": null,
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
                templateId: 9,
                templateType: "Fms",
                title: "Functional Movement Screen",
                totalQuestions: 24,
                totalCompletedQuestions: 0,
                formSchema: {
                    fms101: {
                        type: "Radio",
                        title: "Hand",
                        options: [
                            {val: "fms101-1", label: "Right"},
                            {val: "fms101-2", label: "Left"}
                        ]
                    },

                    fms102: {
                        type: "Radio",
                        title: "Swing",
                        options: [
                            {val: "fms102-1", label: "Right"},
                            {val: "fms102-2", label: "Left"}
                        ]
                    },

                    fms103: {
                        type: "Radio",
                        title: "Throw",
                        options: [
                            {val: "fms103-1", label: "Right"},
                            {val: "fms103-2", label: "Left"}
                        ]
                    },

                    fms104: {
                        type: "Radio",
                        title: "Leg",
                        options: [
                            {val: "fms104-1", label: "Right"},
                            {val: "fms104-2", label: "Left"}
                        ]
                    },

                    fms01: {
                        type: "Select",
                        title: "Overhead Deep Squat",
                        options: [
                            {"val": "fms01-1", "label": "0"},
                            {"val": "fms01-2", "label": "1"},
                            {"val": "fms01-3", "label": "2"},
                            {"val": "fms01-4", "label": "3"}
                        ],
                        editorClass: 'input-small',
                        help: 'points'

                    },
                    fms02: {
                        type: "TextArea",
                        title: "Notes"
                    },
                    fms03: {
                        type: "Select",
                        title: "Hurdle Step (Right)",
                        options: [
                            {"val": "fms03-1", "label": "0"},
                            {"val": "fms03-2", "label": "1"},
                            {"val": "fms03-3", "label": "2"},
                            {"val": "fms03-4", "label": "3"}
                        ],
                        editorClass: 'input-small',
                        help: 'points'
                    },
                    fms04: {
                        type: "Select",
                        title: "Hurdle Step (Left)",
                        options: [
                            {"val": "fms04-1", "label": "0"},
                            {"val": "fms04-2", "label": "1"},
                            {"val": "fms04-3", "label": "2"},
                            {"val": "fms04-4", "label": "3"}
                        ],
                        editorClass: 'input-small',
                        help: 'points'
                    },
                    fms05: {
                        type: "Select",
                        title: "Floor to Tibial Tuberosity",
                        options: [
                            {val: "fms05-1", label: "+"},
                            {val: "fms05-2", label: "-"}
                        ],
                        editorClass: 'input-small',
                        fieldAttrs: {
                            "data-bind": "checkbox",
                            "data-condition": "legExtra"
                        }
                    },
                    fms06: {
                        type: "TextArea",
                        title: "Notes"
                    },
                    fms07: {
                        type: "Select",
                        title: "In-line Lunge (Right)",
                        options: [
                            {"val": "fms07-1", "label": "0"},
                            {"val": "fms07-2", "label": "1"},
                            {"val": "fms07-3", "label": "2"},
                            {"val": "fms07-4", "label": "3"}
                        ],
                        editorClass: 'input-small',
                        help: 'points'
                    },
                    fms08: {
                        type: "Select",
                        title: "In-line Lunge (Left)",
                        options: [
                            {"val": "fms08-1", "label": "0"},
                            {"val": "fms08-2", "label": "1"},
                            {"val": "fms08-3", "label": "2"},
                            {"val": "fms08-4", "label": "3"}
                        ],
                        editorClass: 'input-small',
                        help: 'points'
                    },
                    fms09: {
                        type: "TextArea",
                        title: "Notes"
                    },
                    fms10: {
                        type: "Select",
                        title: "Shoulder Mobility (Right)",
                        options: [
                            {"val": "fms10-1", "label": "0"},
                            {"val": "fms10-2", "label": "1"},
                            {"val": "fms10-3", "label": "2"},
                            {"val": "fms10-4", "label": "3"}
                        ],
                        editorClass: 'input-small',
                        help: 'points'
                    },
                    fms11: {
                        type: "Select",
                        title: "Shoulder Mobility (Left)",
                        options: [
                            {"val": "fms11-1", "label": "0"},
                            {"val": "fms11-2", "label": "1"},
                            {"val": "fms11-3", "label": "2"},
                            {"val": "fms11-4", "label": "3"}
                        ],
                        editorClass: 'input-small',
                        help: 'points'
                    },
                    fms12: {
                        type: "Select",
                        title: "Distal Wrist Crease to tip of 3rd finger",
                        options: [
                            {"val": "fms12-1", "label": "0"},
                            {"val": "fms12-2", "label": "1"},
                            {"val": "fms12-3", "label": "2"},
                            {"val": "fms12-4", "label": "3"}
                        ],
                        editorClass: 'input-small',
                        help: 'points'
                    },
                    fms13: {
                        type: "Select",
                        title: "Pain Clearance (Was there pain?)",
                        options: [
                            {val: "fms13-1", label: "+"},
                            {val: "fms13-2", label: "-"}
                        ],
                        editorClass: 'input-small'
                    },
                    fms14: {
                        type: "TextArea",
                        title: "Notes"
                    },
                    fms15: {
                        type: "Select",
                        title: "Active Straight Leg Raise (Right)",
                        options: [
                            {"val": "fms15-1", "label": "0"},
                            {"val": "fms15-2", "label": "1"},
                            {"val": "fms15-3", "label": "2"},
                            {"val": "fms15-4", "label": "3"}
                        ],
                        editorClass: 'input-small',
                        help: 'points'
                    },
                    fms16: {
                        type: "Select",
                        title: "Active Straight Leg Raise (Left)",
                        options: [
                            {"val": "fms16-1", "label": "0"},
                            {"val": "fms16-2", "label": "1"},
                            {"val": "fms16-3", "label": "2"},
                            {"val": "fms16-4", "label": "3"}
                        ],
                        editorClass: 'input-small',
                        help: 'points'
                    },
                    fms17: {
                        type: "TextArea",
                        title: "Notes"
                    },
                    fms18: {
                        type: "Select",
                        title: "Trunk Stability Pushup",
                        "options": [
                            {"val": "fms18-1", "label": "0"},
                            {"val": "fms18-2", "label": "1"},
                            {"val": "fms18-3", "label": "2"},
                            {"val": "fms18-4", "label": "3"}
                        ],
                        editorClass: 'input-small',
                        help: 'points'
                    },
                    fms19: {
                        type: "Select",
                        title: "Pain Clearance (Was there pain?)",
                        options: [
                            {val: "fms19-1", label: "+"},
                            {val: "fms19-2", label: "-"}
                        ],
                        editorClass: 'input-small'
                    },
                    fms20: {
                        type: "TextArea",
                        title: "Notes"
                    },
                    fms21: {
                        type: "Select",
                        title: "Rotary Stability (Right)",
                        options: [
                            {"val": "fms21-1", "label": "0"},
                            {"val": "fms21-2", "label": "1"},
                            {"val": "fms21-3", "label": "2"},
                            {"val": "fms21-4", "label": "3"}
                        ],
                        editorClass: 'input-small',
                        help: 'points'
                    },
                    fms22: {
                        type: "Select",
                        title: "Rotary Stability (Left)",
                        options: [
                            {"val": "fms22-1", "label": "0"},
                            {"val": "fms22-2", "label": "1"},
                            {"val": "fms22-3", "label": "2"},
                            {"val": "fms22-4", "label": "3"}
                        ],
                        editorClass: 'input-small',
                        help: 'points'
                    },
                    fms23: {
                        type: "Select",
                        title: "Pain Clearance (Was there pain?)",
                        options: [
                            {val: "fms23-1", label: "+"},
                            {val: "fms23-2", label: "-"}
                        ],
                        editorClass: 'input-small'
                    },
                    fms24: {
                        type: "TextArea",
                        title: "Notes"
                    }
                },
                fieldsets: [
                    {
                        legend: "Functional Movement",
                        fields: [
                            "fms101",
                            "fms102",
                            "fms103",
                            "fms104",
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
                templateId: 11,
                templateType: "PerformanceTesting",
                title: "Performance Testing",
                totalQuestions: 10,
                totalCompletedQuestions: 0,
                formSchema: {
                    performancetesting01: {
                        type: "Text",
                        title: "Leg Press(10 RM)",
                        editorClass: "input-small",
                        help: "lbs"
                    },
                    performancetesting02: {
                        type: "Text",
                        title: "Chest Press (10 RM)",
                        editorClass: "input-small",
                        help: "lbs"
                    },
                    performancetesting03: {
                        type: "Text",
                        title: "Push Ups Test",
                        editorClass: "input-small",
                        help: "Completed"
                    },
                    performancetesting04: {
                        type: "Text",
                        title: null,
                        editorClass: "input-small",
                        help: "BPM"
                    },
                    performancetesting05: {
                        type: "Text",
                        title: null,
                        editorClass: "input-small",
                        help: "BPM"
                    },
                    performancetesting06: {
                        type: "Text",
                        title: null,
                        editorClass: "input-small",
                        help: "BPM"
                    },
                    performancetesting07: {
                        type: "Text",
                        title: null,
                        editorClass: "input-small",
                        help: "BPM"
                    },
                    performancetesting08: {
                        type: "Text",
                        title: null,
                        editorClass: "input-small",
                        help: "BPM"
                    },
                    performancetesting09: {
                        type: "Text",
                        title: null,
                        editorClass: "input-small",
                        help: "BPM"
                    },
                    performancetesting10: {
                        type: "TextArea",
                        title: "Final State/ Time / Heart Rate at Stop",
                        editorAttributes: {placeholder: 'Notes'}
                    },
                    performancetesting11: {
                        type: "Text",
                        title: "VO2MAX (ML/KG/MIN)",
                        editorClass: 'input-small',
                        help: '?'
                    }
                },
                fieldsets: [
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
                            "performancetesting10",
                            "performancetesting11"
                        ]
                    }
                ],
                data: {},

                template: '<form class="form-horizontal">\
                    <h2>Performance</h2>\
                    <fieldset data-fields="performancetesting01,performancetesting02,performancetesting03"></fieldset>\
                    <img class="img-polaroid" src="http://placehold.it/350x150.png&text=TBD" alt="Bruce Treadmill Protocol"/>\
                    <table class="table table-striped">\
                        <tr>\
                            <th>Stage</th>\
                            <th>Time</th>\
                            <th>Speed</th>\
                            <th>Speed</th>\
                            <th></th>\
                        </tr>\
                        <tr>\
                            <td>1</td>\
                            <td>0-3 mins</td>\
                            <td>1.7 mph</td>\
                            <td>10%</td>\
                            <td><div data-fields="performancetesting04"></div></td>\
                        </tr>\
                        <tr>\
                            <td>2</td>\
                            <td>3-6 mins</td>\
                            <td>2.5 mph</td>\
                            <td>12%</td>\
                            <td><div data-fields="performancetesting05"></div></td>\
                        </tr>\
                        <tr>\
                            <td>3</td>\
                            <td>6-9 mins</td>\
                            <td>3.4 mph</td>\
                            <td>14%</td>\
                            <td><div data-fields="performancetesting06"></div></td>\
                        </tr>\
                        <tr>\
                            <td>4</td>\
                            <td>9-12 mins</td>\
                            <td>4.5 mph</td>\
                            <td>15%</td>\
                            <td><div data-fields="performancetesting07"></div></td>\
                        </tr>\
                        <tr>\
                            <td>5</td>\
                            <td>12-15 mins</td>\
                            <td>5.5 mph</td>\
                            <td>15%</td>\
                            <td><div data-fields="performancetesting08"></div></td>\
                        </tr>\
                        <tr>\
                            <td>6</td>\
                            <td>15-18 mins</td>\
                            <td>6.5 mph</td>\
                            <td>15%</td>\
                            <td><div data-fields="performancetesting09"></div></td>\
                        </tr>\
                    </table>\
                    <fieldset data-fields="performancetesting10,performancetesting11"></fieldset>\
                    </form>'
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
                    },

                    "city": {
                        "type": "Text",
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
                        "type": "Text"
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

        var formTemplate = _.find(mockUp, function (item) {
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
