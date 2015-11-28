var mongoose = require('mongoose');

var ProblemSchema = new mongoose.Schema({
  MedicineID: String,
  ProblemDescription: String
});

module.exports = mongoose.model('Problem', ProblemSchema);