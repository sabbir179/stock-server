const mongoose = require("mongoose");
const UserInfo = require("./userInfoSchema");
const blogSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  desctiption: {
    type: String,
    require: true,
  },
  publishDate: {
    type: Date,
    default: Date.now,
  },
  comments: String,
});
