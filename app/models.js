var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Equifit = new Schema({
    appointmentAt: String,
    updatedAt: String,
    trainerName: String,
    clientName: String,
    clientId: Number,
    trainerFacility: String,
    isSigned: Boolean,
    isValidated: Boolean,
    documents: [Schema.Types.Mixed]
});

var Form = new Schema({
    title: String,
    templateId: Number,
    totalQuestions: Number,
    totalCompletedQuestions: Number,
    formSchema: Schema.Types.Mixed,
    fieldsets: [Schema.Types.Mixed],
    data: Schema.Types.Mixed,
    content: [Schema.Types.Mixed]

});

module.exports = {
    Equifit: mongoose.model('Equifit', Equifit),
    Form: mongoose.model('Form', Form)
};
