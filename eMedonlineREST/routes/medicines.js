var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Medicine = require('../models/Medicine.js');

/* GET /Medicines listing. */
router.get('/', function(req, res, next) {
  Medicine.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /Medicines */
router.post('/', function(req, res, next) {
  Medicine.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /Medicines/id */
router.get('/:id', function(req, res, next) {
  Medicine.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /Medicines/:id */
router.put('/:id', function(req, res, next) {
  Medicine.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /Medicines/:id */
router.delete('/:id', function(req, res, next) {
  Medicine.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
