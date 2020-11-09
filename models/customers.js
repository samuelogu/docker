const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Customer = new Schema ({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String }
});

module.exports = mongoose.model('Customer', Customer)
