const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const commentsSchema = require("../models/schema/commentsSchema");
const Commnets = new mongoose.model("Comments", commentsSchema, "Comments");

// GET all comments

// GET a blog 