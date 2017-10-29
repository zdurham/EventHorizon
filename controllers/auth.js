
const auth = {

  login: (req, res, next) => {
    return res.status(200).json(req.user.sanitize())
  },


  logout: (req, res, next) => {
    req.session.destroy(function() {
      req.logout();
      res.clearCookie('connect.sid')
      res.send(console.log('user logged out'))
    }) 
  },
  

  register: (req, res, next) => {
    // if successful passport authentication
    res.status(200).json(req.user.sanitize());
  },

  error: (err, req, res, next) => {
    //handle error
    res.status(401).send({success: false, message: err})
  }
}

module.exports = auth