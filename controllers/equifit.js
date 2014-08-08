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
    },

    addEquifit: function (req, res) {
        var newEquifit = new models.Equifit(req.body);
        // newContact.gravatar = md5(newContact.email);
        newEquifit.save(function (err, equifit) {
            if (err) {
                res.json({error: 'Error adding equifit.'});
            } else {
                res.json(equifit);
            }
        });
    }
}