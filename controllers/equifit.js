var models = require('../app/models');

module.exports = {

    equifit: function (req, res) {
        res.render('equifit', { title: 'Equifit' });
    },

    getEquifits: function (req, res) {
        models.Equifit.find({}, function (err, data) {
            res.json(data);
        });
    },

    getEquifit: function (req, res) {
        models.Equifit.find({ _id: req.params.id }, function (err, item) {
            if (err) {
                res.json({error: 'Equifit not found.'});
            } else {
                res.json(item);
            }
        });
    },

    createEquifit: function (req, res) {
        var newEquifit = new models.Equifit(req.body);
        // newContact.gravatar = md5(newContact.email);
        newEquifit.save(function (err, equifit) {
            if (err) {
                res.json({error: 'Error adding equifit.'});
            } else {
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
                    if(obj.isValidated) {
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
        models.Form.find({ _id: req.params.id }, function (err, item) {
            if (err) {
                res.json({error: 'Document not found.'});
            } else {
                res.json(item);
            }
        });
    }
};