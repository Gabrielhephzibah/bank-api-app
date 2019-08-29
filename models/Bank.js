const mongoose = require('mongoose');

const BankSchema = mongoose.Schema({
    accountId: {
        type: String,
        required: true

    },


    accountName: {
        type: String,
        required: true

    },

    accountNumber: {
        type: String,
        required: true

    },

    created_at: {
        type: Date,
        default: Date.now

    }





});


const Bank = module.exports = mongoose.model('Bank', BankSchema);