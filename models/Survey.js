const mongoose = require('mongoose');
const RecipientSchema  = require('./Recipient');
const Schema = mongoose.Schema;
const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    Id: [RecipientSchema],
    yes: {
        type: Number,   
        default: 0
    },
    no: {
        type: Number,
        default: 0
    },
    _userId: {     // this is to setup a relationship between this model and the user model
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    dateSent : Date,
    lastResponded: Date


})  

mongoose.model('surveys', surveySchema);
