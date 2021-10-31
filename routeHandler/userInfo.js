const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const userInfoSchema = require("../models/schema/userInfoSchema");
const UserInfo = new mongoose.model("UserInfo", userInfoSchema, "UserInfo");

// GET all the userInfo
router.get("/", (req, res) => {
  UserInfo.find({ status: "active" })
    .select({
      _id: 0,
      _v: 0,
      date: 0,
    })
    .limit(2)
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          error: "There was a serve side error!",
        });
      } else {
        res.status(200).json({
          result: data,
          message: "Success",
        });
      }
    });
});

// GET a the userInfo
router.get("/:id", async (req, res) => {
  try {
    const data = await UserInfo.find({ _id: req.params.id });
    res.status(200).json({
      result: data,
      message: "Success",
    });
  } catch (err) {
    res.status(500).json({
      error: "there was a server side error!!",
    });
  }
});

//POST a userInfo
// router.post("/", async (req, res) => {
//   try {
//     const newUserInfo = new UserInfo(req.body);
//     res.status(200).json({
//       result: newUserInfo,
//       message: "UserInfo was inserted successfull",
//     });
//   } catch (error) {
//     res.status(500).json({
//       error: "There was a server side error!",
//     });
//     console.log(newUserInfo);
//   }
// });

router.post("/", (req, res) => {
  const newUserInfo = new UserInfo(req.body);
  newUserInfo.save((err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "UserInfo was inserted successfully!",
      });
    }
  });
});

//POST multiple userInfo
router.post("/all", (req, res) => {
  UserInfo.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "UserInfo's were inserted successfully!",
      });
    }
  });
});

//PUT [update] userInfo updateOne
// router.put("/:id", async (req, res) => {
//   await UserInfo.updateOne(
//     { _id: req.params.id },
//     {
//       $set: {
//         status: "active",
//       },
//     },
//     (err) => {
//       if (err) {
//         res.status(500).json({
//           error: "There was a server side error!",
//         });
//       } else {
//         res.status(200).json({
//           message: "UserInfos were updated successfull",
//         });
//       }
//     }
//   );
// });

//PUT [update] userInfo findByIdAndUpdate
router.put("/:id", async (req, res) => {
  const result = await UserInfo.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        status: "active",
      },
    },
    {
      new: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          message: "UserInfos were updated successfull",
        });
      }
    }
  );
  console.log(result);
});

//Delete[update] userInfo
router.delete("/:id", (req, res) => {
  UserInfo.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "UserInfo was deleted successfully!",
      });
    }
  });
});

module.exports = router;
