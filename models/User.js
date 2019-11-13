const mongoose = require('mongoose');
const { Schema } = mongoose ;
const surveySchema = require('./Survey');
const userSchema = new Schema({
    googleId: String,
    numberOfCredits: {
        type: Number,
        default: 0
    }        
})


mongoose.model('users', userSchema);

