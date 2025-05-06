const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  userName: DataTypes.STRING,
  password: DataTypes.STRING,
  email: DataTypes.STRING
}, {
  tableName: 'users',
  timestamps: true
});

module.exports = User;
