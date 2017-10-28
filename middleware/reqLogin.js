// route middleware to make sure a user is logged in
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
      return next();

  // If they aren't logged in do nothing
  res.end();
}
  

module.exports = isLoggedIn
    