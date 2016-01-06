// Dependencies
var express = require('express');
var router = express.Router();

//Model
var Customer= require('../models/customer');
var Hospital= require('../models/hospital');
// Routes



/* GET /todos listing. */
router.get('/customers', function(req, res, next) {
Customer.find(function (err, customerlist) {
if (err) return next(err);
res.json(customerlist)
});
});

/* POST /todos */
router.post('/customers', function(req, res, next) {
Customer.create(req.body, function (err, post) {
if (err) return next(err);
res.json(post);
});
});


router.get('/customers/:customerid', function(req, res, next) {
Customer.find({CustomerId: req.params.customerid},function (err, customerlist) {
if (err) return next(err);
res.json(customerlist)
});
});



/* GET /todos listing. */
router.get('/hospital', function(req, res, next) {
Hospital.find(function (err, objlist) {
if (err) return next(err);
res.json(objlist)
});
});

/* POST /todos */
router.post('/hospital', function(req, res, next) {
Hospital.create(req.body, function (err, post) {
if (err) return next(err);
res.json(post);
});
});


router.get('/hospital/:customerid', function(req, res, next) {
Hospital.find({CustomerId: req.params.customerid},function (err, objlist) {
if (err) return next(err);
res.json(objlist)
});
});



// Return router
module.exports = router;
