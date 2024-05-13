const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

<<<<<<< HEAD
mongoose.connect("mongodb://127.0.0.1:27017/instaclone");
=======
mongoose.connect("mongodb://127.0.0.1:27017/instainsta");
>>>>>>> 920173667d39b42221dfbc256fe2b1e87fc58ca2

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
<<<<<<< HEAD
  profileImage: String,
  bio: String,
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: "post"}],                          // It is an array of id's

})

userSchema.plugin(plm);    // Is line se hm serializer or deserializer user ko provide kr rhe hai.

module.exports = mongoose.model("user", userSchema);   // Kisi or file k through is file mai hm create, read, update, delete kr payenge.
=======
  picture: {
    type: String,
    default: "def.png"
  },
  contact: String,
  bio: String,
  stories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "story" 
    }
  ],
  saved: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post" 
    }
  ],
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "post" 
  }],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user" 
    } 
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user" 
    }
  ]
})

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);
>>>>>>> 920173667d39b42221dfbc256fe2b1e87fc58ca2
