const mongooseConnection = require('./path/to/mongooseConnection');

// Now you can use `mongooseConnection` to define your Mongoose models and interact with the database.


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/SteamPowered-Designs', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
