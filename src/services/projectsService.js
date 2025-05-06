const Project = require('../models/project');

const getAllProjects = async () => {
  return await Project.findAll();
};

module.exports = { getAllProjects };
