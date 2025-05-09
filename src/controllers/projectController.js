const Projects = require('../models/projects');

const getProjects = async (req, res) => {
    const projects = await Projects.findAll();
    return res.status(200).json(projects);
};

module.exports = { getProjects };