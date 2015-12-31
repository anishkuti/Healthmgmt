// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
//mongoose.connect('mongodb://localhost/rest_test');
mongoose.connect('mongodb://mongopoc:mongopoc@ds037395.mongolab.com:37395/healthsystem');
// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/apiV1', require('./routes/api'));
app.use('/apiV2', require('./routes/apiV2'));

// Start server
app.listen(3000);
console.log('Listening on port 3000...');
