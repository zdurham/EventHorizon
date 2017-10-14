// Here I will set up a bunch of configuration that we need across the server files
module.exports = {
  // mongo db connection
  db: process.env.MONGODB_URI || "mongodb://localhost/eventsdb",
  // secret for tokens
  secret: 'we are highly overreacting',
  // port
  port: process.env.PORT || 3030
}