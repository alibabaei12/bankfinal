//importing modules

var express = require('express');

var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var app = express();

const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var _ = require("underscore");


const CONNECTION_URL =
  "mongodb+srv://admin:admin@my-cluster-fpbo3.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "example";

var database, collection;

const route = require('./routes/route');

app.use('*',cors());
//body-parser
app.use(bodyparser.json());

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
    MongoClient.connect(
      CONNECTION_URL,
      { useNewUrlParser: true },
      (error, client) => {
        if (error) {
          throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("people");
        console.log("Connected to `" + DATABASE_NAME + "`!");
      }
    );
  });