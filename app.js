//importing modules

var express = require('express');

var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var app = express();

const route = require('./routes/route');

app.use('*',cors());
//body-parser
app.use(bodyparser.json());

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on conncetion
mongoose.connection.on('connected', ()=>{
    console.log('connected to database mongodb @27017');
});

mongoose.connection.on('error', (err)=>{
    if(err){
        console.log(err);
    }
})

//port number
const port = 3000;

app.use('/api', route);

//static files
app.use(express.static(path.join(__dirname, 'public')))

//testing server
app.get('/', (req, res)=>{
    res.send('foobar');
});


app.listen(port, ()=>{
    console.log("server connected succesfully");
});