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
            res.json(data);
        });
    },

    getEquifit: function (req, res) {
        'use strict';

        models.Equifit.find({_id: req.params.id}, function (err, item) {
            if (err) {
                res.json({error: 'Equifit not found.'});
            } else {
                res.json(item);
            }
        });
    },

    createEquifit: function (req, res) {
        'use strict';

        var mockUp = {
            appointmentAt: null,
            updatedAt: null,
            trainerName: 'Josh Smith',
            trainerFacility: 'Tribeca',
            clientName: 'Donna Summer',
            clientId: 123,
            isSigned: false,
            isValidated: false,
            documents: [
                {
                    title: 'Personal Info',
                    templateId: 2,
                    templateType: 'Personal Information',
                    totalQuestions: 5,
                    totalCompletedQuestions: 2
                },

                {
                    templateId: 66,
                    title: 'Informed Consent',
                    templateType: 'InformedConsent',
                    totalQuestions: 1,
                    totalCompletedQuestions: 0
                },
                {
                    title: 'Medical / Orthopedic HX',
                    templateId: 2,
                    templateType: 'Medical',
                    totalQuestions: 5,
                    totalCompletedQuestions: 2
                },
                {
                    templateId: 7,
                    templateType: 'Lifestyle',
                    title: 'Lifestyle',
                    totalQuestions: 15,
                    totalCompletedQuestions: 10
                },

                {
                    templateId: 6,
                    templateType: 'ExerciseHistory',
                    title: 'Exercise History',
                    totalQuestions: 7,
                    totalCompletedQuestions: 6
                },
                {
                    templateId: 4,
                    templateType: 'GoalsHabits',
                    title: 'Goals & Habits',
                    totalQuestions: 12,
                    totalCompletedQuestions: 1
                },
                {
                    _id: '53ed60ebb4932fec89e19a60',
                    templateId: 4,
                    templateType: 'RegenerationNutrition',
                    title: 'Regeneration & Nutrition',
                    totalQuestions: 12,
                    totalCompletedQuestions: 1
                },
                {
                    templateId: 4,
                    templateType: 'BodyMeasurements',
                    title: 'Body Measurements',
                    totalQuestions: 12,
                    totalCompletedQuestions: 1
                },
                {
                    templateId: 4,
                    templateType: 'FunctionalMovementScreen',
                    title: 'Functional Movement Screen',
                    totalQuestions: 12,
                    totalCompletedQuestions: 1
                },
                {
                    templateId: 4,
                    templateType: 'Equistretch',
                    title: 'Equistretch',
                    totalQuestions: 12,
                    totalCompletedQuestions: 1
                },
                {
                    templateId: 4,
                    templateType: 'PerformanceTesting',
                    title: 'Performance Testing',
                    totalQuestions: 12,
                    totalCompletedQuestions: 1
                },
                {
                    templateId: 8,
                    templateType: 2,
                    title: 'Physical Test',
                    totalQuestions: 5,
                    totalCompletedQuestions: 5
                }
            ]
        };

        var newEquifit = new models.Equifit(_.extend(req.body, mockUp));
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

    //getDocuments: function (req, res) {
    //    models.Form.find({}, function (err, data) {
    //        res.json(data);
    //    });
    //},

    getDocument: function (req, res) {
        'use strict';

        models.Form.findById(req.params.id, function(err, item) {
            if (err)
                res.send(err);
            res.json(item);
        });

        //models.Form.findOne({_id: req.params.id}, function (err, item) {
        //    if (err) {
        //        res.json({error: 'Document not found.'});
        //    } else {
        //        console.log('ITEM', item);
        //        res.json(item);
        //    }
        //});
    },

    createDocument: function (req, res) {
        'use strict';

        var mockUp = {
            templateId: 2,
            title: 'Physical Test',
            totalQuestions: 5,
            totalCompletedQuestions: 5,
            formSchema: {
                email: {
                    validators: ['required', 'email']
                },
                name: 'Text',
                title: {
                    options: ['', 'Mr', 'Mrs', 'Ms'],
                    type: 'Select'
                }
            },
            data: {},
            fieldsets: [
                {
                    fields: ['title', 'name', 'email', 'testHidden'],
                    legend: 'Member Information'
                }
            ]
        };


        var newForm = new models.Form(_.extend(req.body, mockUp));
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

        //console.log('obj', obj);

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