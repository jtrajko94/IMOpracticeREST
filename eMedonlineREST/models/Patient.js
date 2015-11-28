var mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema({
  PatientName: String,
  PatientAge: String,
  PatientAddress: String
});

module.exports = mongoose.model('Patient', PatientSchema);