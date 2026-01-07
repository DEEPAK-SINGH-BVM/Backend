const mongoose = require("mongoose");
// The populate() method in Mongoose automatically replaces a reference field (ObjectId) with the actual document from another collection 

const postSchema = new mongoose.Schema({
  title: String,
  postBy: {
    //  // stores User document ObjectId
    type: mongoose.Schema.Types.ObjectId,
    // in ref give model to get user details from Id
    ref: "User",
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
