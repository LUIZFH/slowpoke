var mongoose = require('mongoose');
mongoose.connect( 'mongodb://' + process.env.MONGO_HOST + "/" + process.env.MONGO_DB )
mongoose.Promise = global.Promise
module.exports = mongoose