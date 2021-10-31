const mongoose = require("mongoose");
const UserInfo = require("./userInfoSchema");
const BlogInfo = require("./blogSchema");

const commentsSchema = mongoose.Schema({
  comment: {
    type: String,
    require: true,
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
  userInfo: UserInfo._id,
  blogInfo: BlogInfo._id,
  replyForComments: commentsSchema._id,
});
