var mongoose = require('mongoose');

var AllergySchema = new mongoose.Schema({
  PatientID: String,
  AllergyDescription: String,
});

module.exports = mongoose.model('Allergy', AllergySchema);