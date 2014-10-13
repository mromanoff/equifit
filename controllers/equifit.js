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
                    data = require('../models/equifit-empty');
                }
                res.json(data);
            }
        });
    },

    createEquifit: function (req, res) {
        'use strict';
        var data = require('../models/equifit-new');
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
        var data =  require('../models/form-create');

        var formTemplate = _.find(data, function (item) {
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
