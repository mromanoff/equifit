var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Equifit = new Schema({
    createdAt: String,
    updatedAt: String ,
    trainerName: String,
    clubName: String,
    isComplete: Boolean,
    isSigned: Boolean
});

var Form = new Schema({
    title: String,
    templateId: Number,
    isComplete: Boolean,
    totalQuestions: Number,
    totalCompletedQuestions: Number,
    formSchema: Schema.Types.Mixed,
    fieldsets: [Schema.Types.Mixed],
    data: Schema.Types.Mixed
});

module.exports = {
    Equifit: mongoose.model('Equifit', Equifit),
    Form: mongoose.model('Form', Form)
};
