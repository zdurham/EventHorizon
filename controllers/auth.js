
const auth = {

  login: (req, res, next) => {
    return res.status(200).json(req.user.sanitize())
  },


  logout: (req, res, next) => {
    req.session.destroy((err) => {
      if (err) {
        return next(err)
      }
      else {
        req.logout()
        res.end()
      }
    })
  },
  

  register: (req, res, next) => {
    // if successful passport authentication
    res.status(200).json(req.user.sanitize());
  },

  error: (err, req, res, next) => {
    //handle error
    // console.log('auth error', err)
    res.status(401).send({message: 'You are unauthorized'})
  }
}

module.exports = auth