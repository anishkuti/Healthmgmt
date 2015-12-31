// Dependencies
var express = require('express');
var router = express.Router();

//Model
var Customer= require('../models/customer');
// Routes



/* GET /todos listing. */
router.get('/customers', function(req, res, next) {
Customer.find(function (err, customerlist) {
if (err) return next(err);
res.json(customerlist.map(function(movie){
return{
        Name:movie.Name,
        Date_Of_Birth:movie.DOB
}
}
));
});
});

/* POST /todos */
router.post('/customers', function(req, res, next) {
Customer.create(req.body, function (err, post) {
if (err) return next(err);
res.json(post);
});
});



// Return router
module.exports = router;
