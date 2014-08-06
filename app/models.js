var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Equifit = new Schema({
    createdAt: String,
    updatedAt: String ,
    updatedBy: String,
    clubName: String,
    complete: Boolean
});

var Form = new Schema({
    title: String,
    complete: Boolean,

    formSchema: Schema.Types.Mixed,
    fieldsets: [Schema.Types.Mixed],
    data: Schema.Types.Mixed


});

module.exports = {
    Equifit: mongoose.model('Equifit', Equifit),
    Form: mongoose.model('Form', Form)
};
