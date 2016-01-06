// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var hospitalSchema = new mongoose.Schema({
"CustomerId": String,
"Date": String,
"Illness": String,
"Prescription_Id": String,
"Prescription": String,
"Doctor_Id": String,
"Doctor_Name": String,
"Hospital_Id": String,
"Hospital_Name": String,
"AppointmentId": String,
"Appointment_Status": String,
"Planned_Appointment_Timestamp": String,
"Actual_Appointment_Timestamp": String,
"Previous_Visit_Timestamp": String,
"Reports": String
});

// Return model
module.exports = restful.model('hospital', hospitalSchema);

