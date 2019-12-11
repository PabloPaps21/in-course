const Project = require ("../models/Project");

exports.createProject = async (req,res) => {
  const { _id } = req.user;
  const { program, university, total, description } = req.body;
  
  const project = await Project.create({
    program,
    university,
    total,
    description,
    imgProject,
    creator: _id,
  })
  res.status(201).json(project);
}
exports.upload = async (req, res) => {
  if(req.file) {
    const { secure_url } = req.file;
    const { id } = req.params;
    await Project.findByIdAndUpdate(id, { academic: secure_url });
  }
}


//lista proyectos
exports.getProjects = async(req, res) => {
  const projects = await Project.find();
  res.status(200).json({projects});
}


//detalle proyecto

exports.projectDetail = async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  res.status(200).json(task);
};
