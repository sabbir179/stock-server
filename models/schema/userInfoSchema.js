const mongoose = require("mongoose");
const userInfoSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    trim: true,
  },
  lastName: {
    type: String,
    require: true,
    trim: true,
  },

  // name: [
  //   {
  //     firstName: {
  //       type: String,
  //       require: true,
  //     },
  //     lastName: {
  //       type: String,
  //       require: true,
  //     },
  //   },
  // ],

  phone: {
    type: String,
    require: true,
    trim: true,
    unique:true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  // password: {
  //   type: String,
  //   require: true,
  // },
  referealCode: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ["pending", "active", "deactive", "delete"],
  },
  subcriptionType: {
    type: String,
    enum: ["freeWithoutRef", "gold", "platinum", "freeWithRef"],
  },
  dateOfJoin: {
    type: Date,
    default: Date.now,
  },
  joinMode: {
    type: String,
    enum: ["refferal", "direct"],
  },
  password: { type: String, required: true},
  isAdmin: {type: Boolean, default: false, required: true}
},
{
  timestamps: true,
}
);


module.exports = userInfoSchema;
