const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const sharedPostSchema = new Schema({
  username: String,
  userPost: String,
  likes: Number,
  date: {
    type: String,
    default: Date.now(),
  },
});

const sharedPost = mongoose.model('sharedPost', sharedPostSchema);

module.exports = sharedPost;
