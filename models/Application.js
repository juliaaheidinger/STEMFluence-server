var mongoose = require('mongoose')

var ApplicationSchema = new mongoose.Schema({
  campaign: mongoose.SchemaTypes.String,
  name: mongoose.SchemaTypes.String,
  address: mongoose.SchemaTypes.String,
  email: mongoose.SchemaTypes.String,
  plattform: mongoose.SchemaTypes.String,
  handle: mongoose.SchemaTypes.String,
  followers: mongoose.SchemaTypes.String,
  textConnection: mongoose.SchemaTypes.String,
  textPostIdea: mongoose.SchemaTypes.String,
  fee: mongoose.SchemaTypes.String,
  termsAccepted: {
    type: mongoose.SchemaTypes.Boolean,
    default: false
  }
})

module.exports = mongoose.model('Application', ApplicationSchema)
