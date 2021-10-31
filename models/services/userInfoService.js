const UserInfo = require("../schema/userInfoSchema");

module.exports.create = (userInfo) => {
  return UserInfo.create(userInfo);
};
