var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Equifit = new Schema({
    createdAt: { type: String },
    updatedAt: { type: String },
    updatedBy: { type: String },
    clubName: { type: String },
    complete: { type: Boolean }
});

var Form = new Schema({
    title: { type: String },
    complete: { type: Boolean }
});

module.exports = {
    Equifit: mongoose.model('Equifit', Equifit),
    Form: mongoose.model('Form', Form)
};
