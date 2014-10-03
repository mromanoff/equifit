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
    isSubmitted: Boolean,
    documents: [Schema.Types.Mixed]
});

var Form = new Schema({
    title: String,
    templateId: Number,
    templateType: String,
    totalQuestions: Number,
    totalCompletedQuestions: Number,
    formSchema: Schema.Types.Mixed,
    fieldsets: [Schema.Types.Mixed],
   //idPrefix: String,
    data: Schema.Types.Mixed,
    template: Schema.Types.Mixed,
    content: [Schema.Types.Mixed],
    parent: Schema.Types.Mixed
});

module.exports = {
    Equifit: mongoose.model('Equifit', Equifit),
    Form: mongoose.model('Form', Form)
};
