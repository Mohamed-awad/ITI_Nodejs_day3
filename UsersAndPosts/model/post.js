const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
    title: { type: String},
    body: { type: String},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const Post = mongoose.model('Post', mySchema);

module.exports = Post;
