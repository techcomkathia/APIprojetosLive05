const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Project = sequelize.define('Project', {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  date: DataTypes.DATEONLY
}, {
  tableName: 'projects',
  timestamps: true
});

module.exports = Project;
