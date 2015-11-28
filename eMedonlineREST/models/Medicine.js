var mongoose = require('mongoose');

var MedicineSchema = new mongoose.Schema({
  MedicineName: String,
  PatientID: String,
  MedicineExpiration: String,
  MedicineDescription: String
});

module.exports = mongoose.model('Medicine', MedicineSchema);