const userInfoService = require("../models/services/userInfoService");

module.exports.create = async (req, res, next) => {
  try {
    const userInfo = await userInfoService.create(req.body);
    return res.status(200).json(userInfo);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Somethis went wrong" });
  }
};
