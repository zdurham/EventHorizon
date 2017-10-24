// route middleware to make sure a user is logged in
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
      return next();

  // if they aren't redirect them to the home page
  res.send('You must be logged in to use this function')
}
  

module.exports = isLoggedIn
    