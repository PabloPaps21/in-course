//quien invierte

const User = require ("../models/User");

exports.myInvestList = async (req, res) => {
  const { _id } = req.user;
  const listaInversiones = await User.findById(_id).populate("misInversiones")
  res.status(200).json({listaInversiones})
}