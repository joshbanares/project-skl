const mongoose = require('mongoose');

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

const Schema = mongoose.Schema;
const sharedPostSchema = new Schema({
  username: String,
  userPost: String,
  likes: Number,
  date: {
    type: String,
    default: today,
  },
});

const sharedPost = mongoose.model('sharedPost', sharedPostSchema);

module.exports = sharedPost;
