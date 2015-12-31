// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var customerSchema = new mongoose.Schema({
Customer_Id: String,
Contactnumber: String,
Name: String,
DOB: String,
Address: String,
BPSystolic: Number,
BPDiastolic: Number,
Threshold: Number,
Preferred_Hospital_Id: String,
Preferred_Pharmacy_ID: String,
Preferred_Cab_Id: String,
Preferred_Doctor_Id: String
});

// Return model
module.exports = restful.model('Customer', customerSchema);
