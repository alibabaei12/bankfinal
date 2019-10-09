const mongoose = require('mongoose');
const applicantsSchema = mongoose.Schema({
first_name:{
type: String,
required: true
},
middle_name:{
type: String,
required: false
},
last_name:{
type: String,
required: true
},
email:{
type: email,
required: true
},
phone:{
type:String,
required: true
},
ssn:{
type:String,
required:true
},
income:{
type:Number,
required:true
},
gender:{
type:String,
required:true
},
dob:{
type:Date,
required:true
},
address:{
type:String,
required:true
},
city:{
type:String,
required: true
},
state:{
type:String,
required:true
},
zipcode:{
type:String,
required:true
},
rent:{
type:Number,
required:true
},
employer:{
type:String,
required:true
},
emp_phone:{
type:String,
required:true
},
time_employed:{
type:Number,
required:true
}
});
const applicants = module.exports = mongoose.model('applicants',applicantsSchema);