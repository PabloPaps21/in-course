const Investment = require ('../models/Investment');
const Project  = require('../models/Project');
const User = require('../models/User')

//crear inversion
exports.createInvest = async(req, res, next) => {
  const { quantity, project } = req.body
  const { _id } = req.user
  try {
  const invest = await Investment.create({
    quantity, projectId: project._id, investorId:_id, studentId: project.creator
  });
  let actual = parseFloat(project.actual) + parseFloat(quantity)
  await Project.findByIdAndUpdate(project._id, { actual });

  const myInvests = await User.findByIdAndUpdate(
    {_id}, 
    { $push: { misInversiones: invest._id}},
    { new: true }
  );

  res.status(200).json({invest, myInvests})
  } catch (e) {
    console.log(e)
  }
}

//obtener todas las inversiones por usuario
exports.getInvestments = async (req, res) => {
  const investments = await Investment.find({ investorId: req.user._id }).populate('projectId'); 
  res.status(200).json({ investments })
}

//detalle inversion
exports.investDetail = async (req, res) => {
  const { id } = req.params;
  const invest = await Investment.findById(id).populate('projectId');
  res.status(200).json(invest);
};


//UPDATE
  exports.updateInvestment = async (req, res) =>{
  const { id } = req.params;
  
  const investment = await Investment.findById(id);

  

  const project = await Project.findById(investment.projectId)

  const { quantity } = req.body;

  console.log(` QUANTITY: ${investment.quantity}`)

  //let actual = (parseFloat(project.actual) + parseFloat(quantity)
  let temporal = parseFloat(quantity)
  let qty = parseFloat(quantity);
  let actual = parseFloat(project.actual);

  if(qty > 0){
    console.log('SUMA')
    temporal = parseFloat(project.actual) + parseFloat(qty)
  } else if(qty < 0) {
    console.log('RESTA')
    temporal = parseFloat(project.actual) - parseFloat(qty)
  }

  console.log(`ACTUAL: ${actual}`)
  await Project.findByIdAndUpdate(project._id, {actual });

  const investments = await Investment.findByIdAndUpdate(id, { quantity });
  console.log(`ESTE EL EL ULTIMO NUMERO: ${actual}`)

  res.status(200).json(investments)
}

//eliminar inversion
exports.deleteInvestment = async(req, res) => {
  const { id } = req.params;
  const investment = await Investment.findById(id);
  //console.log(investment + 'inversion');
  const project = await Project.findById(investment.projectId)
  //console.log(project + 'proyecto')
  //console.log(`antes de la resta: ${project.total}`)
  let actual = parseFloat(project.actual) - parseFloat(investment.quantity)
  await Project.findByIdAndUpdate(project._id, { actual });
  //console.log(`numero1: ${project.total}`)
  //console.log(`numero2: ${investment.quantity}`)
  //console.log(`resta: ${actual}`)
  await Project.findByIdAndUpdate(project._id);
  await Investment.findByIdAndDelete(id);
  // res.status(200).json({ message:"delete" });
  return res.status(200).json(project);
}
