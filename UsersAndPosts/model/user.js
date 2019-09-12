const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
    first_name: { type: String},
    last_name: { type: String},
    age: { type: Number, min: 18, index: true },
    email: { type: String, match: /[a-z0-9]+@[a-z]/ },
    phone: { type: String, match: /01[0-9]{9}/},
});

const User = mongoose.model('User', mySchema);

module.exports = User;
