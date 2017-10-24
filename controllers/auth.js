
const auth = {
  login: (req, res, next) => {
    res.status(200).json(
      req.user.sanitize
    )
  },

  logout: (req, res, next) => {
    req.session.destroy(function() {
      req.logout();
      res.send(console.log('user logged out'))
    }) 
  },
  

  register: (req, res, next) => {
    // if successful passport authentication
    return res.status(200).json(req.user.sanitize());
    // if error

      // handle success
  return res.status(200).json(req.user.sanitize());
  },

  error: (err, req, res, next) => {
    //handle error
    res.status(401).json({error: 'Authentication failed.'})
  }
}

module.exports = auth