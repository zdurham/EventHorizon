module.exports = (req, res, next) => {
  if (req.session.id && req.session.userId) {
    return next()
  }
  else {
    res.redirect('/login')
  }
}

