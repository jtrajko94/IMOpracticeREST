var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Patient = require('../models/Patient.js');

/* GET /Patients listing. */
router.get('/', function(req, res, next) {
  Patient.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /Patients */
router.post('/', function(req, res, next) {
  Patient.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /Patients/id */
router.get('/:id', function(req, res, next) {
  Patient.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /Patients/:id */
router.put('/:id', function(req, res, next) {
  Patient.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /Patients/:id */
router.delete('/:id', function(req, res, next) {
  Patient.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
