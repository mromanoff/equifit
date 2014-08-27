var models = require('../app/models');
var _ = require('underscore');

module.exports = {

    equifit: function (req, res) {
        res.render('equifit', {title: 'Equifit'});
    },

    getEquifits: function (req, res) {
        models.Equifit.find({}, function (err, data) {
            res.json(data);
        });
    },

    getEquifit: function (req, res) {
        models.Equifit.find({_id: req.params.id}, function (err, item) {
            if (err) {
                res.json({error: 'Equifit not found.'});
            } else {
                res.json(item);
            }
        });
    },

    createEquifit: function (req, res) {
        var mockUp = {
            appointmentAt: null,
            updatedAt: null,
            trainerName: "Josh Smith",
            trainerFacility: "Tribeca",
            clientName: "Donna Summer",
            clientId: 123,
            isSigned: false,
            isValidated: false,
            documents: [
                {
                    templateId: 66,
                    templateType: "InformedConsent",
                    title: "Consent Form",
                    isComplete: false,
                    totalQuestions: 1,
                    totalCompletedQuestions: 0
                },

                {
                    title: "PAR-Q",
                    templateType: 2,
                    templateId: 2,
                    totalQuestions: 10,
                    totalCompletedQuestions: 0
                },
                {
                    title: "Personal Info",
                    templateId: 3,
                    templateType: 2,
                    totalQuestions: 10,
                    totalCompletedQuestions: 0
                },
                {
                    title: "Goals",
                    templateId: 4,
                    templateType: 2,
                    isComplete: false,
                    totalQuestions: 12,
                    totalCompletedQuestions: 0
                },
                {
                    templateId: 5,
                    templateType: 2,
                    title: "Orthopedic",
                    isComplete: false,
                    totalQuestions: 13,
                    totalCompletedQuestions: 0
                },
                {
                    templateId: 6,
                    templateType: 2,
                    title: "Exercise History",
                    isComplete: false,
                    totalQuestions: 7,
                    totalCompletedQuestions: 0
                },
                {
                    templateId: 7,
                    templateType: 2,
                    title: "Lifestyle",
                    isComplete: false,
                    totalQuestions: 15,
                    totalCompletedQuestions: 0
                },
                {
                    templateId: 8,
                    templateType: 2,
                    title: "Physical Test",
                    isComplete: false,
                    totalQuestions: 5,
                    totalCompletedQuestions: 0
                }
            ]
        };

        //console.log('req.body', req.body);

        var newEquifit = new models.Equifit(_.extend(req.body, mockUp));
        // newContact.gravatar = md5(newContact.email);
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

    getDocuments: function (req, res) {
        models.Form.find({}, function (err, data) {
            res.json(data);
        });
    },

    getDocument: function (req, res) {
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
        var mockUp = {
            templateId: 8,
            title: "Physical Test",
            totalQuestions: 5,
            totalCompletedQuestions: 5,
            formSchema: {
                email: {
                    validators: ["required", "email"]
                },
                name: "Text",
                title: {
                    options: ["", "Mr", "Mrs", "Ms"],
                    type: "Select"
                }
            },
            data: {},
            fieldsets: [
                {
                    fields: ["title", "name", "email", "testHidden"],
                    legend: "Member Information"
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