// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var customerSchema = new mongoose.Schema({
CustomerId: String,
ContactNumber: String,
Name: String,
DOB: String,
Address: String,
BPSystolic: String,
BPDiastolic: String,
Weight: String,
BPThreshold: String,
Preferred_Hospital: String,
Preferred_Pharmacy: String,
Preferred_Cab_Service: String,
Preferred_pickup_location: String,
Preferred_Doctor: String,
Friend_1: String,
Friend_2: String,
Last_Hospital_Visit: String

});

// Return model
module.exports = restful.model('Customer', customerSchema);
