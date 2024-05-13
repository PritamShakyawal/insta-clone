const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/instaclone");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  bio: String,
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: "post"}],                          // It is an array of id's

})

userSchema.plugin(plm);    // Is line se hm serializer or deserializer user ko provide kr rhe hai.

module.exports = mongoose.model("user", userSchema);   // Kisi or file k through is file mai hm create, read, update, delete kr payenge.