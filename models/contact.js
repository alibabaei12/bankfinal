const mongoDB = require('mongodb');

const contactSchema = mongoDB.Schema({
first_name:{
type: String,
required: false
},
middle_name:{
type: String,
required: false
},
last_name:{
type: String,
required: false
},
email:{
type: String,
required: false
},
phone:{
type:String,
required: false
},
ssn:{
type:String,
required:false
},
income:{
type:Number,
required:false
},
gender:{
type:String,
required:false
},
dob:{
type:Date,
required:false
},
address:{
type:String,
required:false
},
city:{
type:String,
required: false
},
state:{
type:String,
required:false
},
zipcode:{
type:String,
required:false
},
rent:{
type:Number,
required:false
},
employer:{
type:String,
required:false
},
emp_phone:{
type:String,
required:false
},
time_employed:{
type:Number,
required:false
},
status:{
    type:String,
    default:'Pending'
}
});
const applicants = module.exports = mongoDB.model('contact',contactSchema);