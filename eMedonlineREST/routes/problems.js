var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Problem = require('../models/Problem.js');

/* GET /Problems listing. */
router.get('/', function(req, res, next) {
  Problem.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /Problems */
router.post('/', function(req, res, next) {
  Problem.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /Problems/id */
router.get('/:id', function(req, res, next) {
  Problem.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /Problmes/:id */
router.put('/:id', function(req, res, next) {
  Problem.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /Problmes/:id */
router.delete('/:id', function(req, res, next) {
  Problem.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
