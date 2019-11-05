const mongoose = require('mongoose');
const { Schema } = mongoose ;

module.exports = recipientSchema = new Schema({
    email: String,
    clicked: {
        type: Boolean,
        default: false
    }
})
