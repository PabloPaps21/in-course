const Project = require ("../models/Project");

exports.createProject = async (req,res) => {
  const { _id } = req.user;
  const { program, university, total, description } = req.body;
  
  const project = await Project.create({
    program,
    university,
    total,
    description,
    creator: _id
  })
  res.status(201).json(project);
}

