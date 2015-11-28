var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Allergy = require('../models/Allergy.js');

/* GET /Allergies listing. */
router.get('/', function(req, res, next) {
  Allergy.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /Allergies */
router.post('/', function(req, res, next) {
  Allergy.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /Allergies/id */
router.get('/:id', function(req, res, next) {
  Allergy.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /Allergies/:id */
router.put('/:id', function(req, res, next) {
  Allergy.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /Allergies/:id */
router.delete('/:id', function(req, res, next) {
  Allergy.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
