const User = require ('../models/User');

exports.signup = async (req, res, next) => {
  const user = await  User.register(
      { ...req.body }, req.body.password )
  .then(user => res.redirect("/login"))
  .catch(
    err => {
      res.status(500).json({err})
    }
  )
  return res.status(201).json({ user })
  
}

exports.signupGet = (req, res) => res.render("/signup");


exports.login = (req, res, next) => {
  res.status(200).json({ user: req.user })
}

exports.logout = (req, res, next) => {
  req.logout()
  res.clearCookie('connect.sid')
  res.status(200).json({ msg: 'Saliste' })
}

exports.profile = async (req, res, next ) => {
  const user = await User.findById(req.user._id)
  res.status(200).json({ user })
};
