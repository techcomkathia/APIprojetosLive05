const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user');
const Project = require('./project');

const UserProject = sequelize.define('UserProject', {
  users_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: User,
      key: 'id'
    }
  },
  projects_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Project,
      key: 'id'
    }
  }
}, {
  tableName: 'users_has_projects',
  timestamps: true
});

// Define relacionamentos muitos-para-muitos
User.belongsToMany(Project, {
  through: UserProject,
  foreignKey: 'users_id',
  otherKey: 'projects_id'
});

Project.belongsToMany(User, {
  through: UserProject,
  foreignKey: 'projects_id',
  otherKey: 'users_id'
});

module.exports = UserProject;
