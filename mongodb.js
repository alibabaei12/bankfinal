const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var _ = require("underscore");
var cors=require("cors");
const CONNECTION_URL =
  "mongodb+srv://admin:admin@my-cluster-fpbo3.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "example";
var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.get("/", function(req, res) {
//   res.render("index");
// });

// app.use(
//   BodyParser.urlencoded({
//     extended: true
//   })
// );
var database, collection;
app.post("/postdata", (request, response) => {
  collection.insert(request.body, (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result);
  });
});

app.get("/getdata/:email", (request, response) => {
  collection.find({email: request.params.email}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result);
  });
});

app.get("/getdata", (request, response) => {
  collection.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    // response.render("index.ejs", { data: result });
    response.send(result);
  });
});
var userdata = []

app.put("/updatedata/:email", (req, res) => {
  MongoClient.connect(CONNECTION_URL, function(err, db) {
    if (err) throw err;
    
    var dbo = db.db("example");
    var myquery = { email: req.params.email};
    console.log ("email is: " + req.params.email)
    var newvalues = { $set: {status: req.body.status} };
    console.log("status is: " + req.body.status)
    dbo.collection("people").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close
    });
  });

 res.send("hello")
});

app.put("/updateall/:email", (req, res) => {
  MongoClient.connect(CONNECTION_URL, function(err, db) {
    if (err) throw err;
    
    var dbo = db.db("example");
    var myquery = { email: req.params.email};
    console.log ("email is: " + req.params.email)
    var newvalues = { $set: {
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        ssn: req.body.ssn,
        income: req.body.income,
        gender: req.body.gender,
        dob: req.body.dob,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        rent: req.body.rent,
        employer: req.body.employer,
        emp_phone: req.body.emp_phone,
        time_employed: req.body.time_employed,
        status: req.body.status} };
    console.log("status is: " + req.body.status)
    dbo.collection("people").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close
    });
  });

 res.send("hello")
});


app.listen(3000, () => {
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
