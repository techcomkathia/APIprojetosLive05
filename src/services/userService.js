const User = require('../models/user');

const getAllUsers = async () => {
  return await User.findAll({
    attributes: ['name', 'email']
  });
};

const getUserByUserName = async (userName) => {
  return await User.findOne({ where: { userName } });
};

module.exports = {
  getAllUsers,
  getUserByUserName
};
