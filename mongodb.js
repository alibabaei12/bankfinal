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
    response.send(result.result);
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
var userdata = [];
app.put("/updatedata/:id", (req, res) => {
    var todoid = parseInt(req.params.id);
    var mct = _.findWhere(userdata, { id: todoid });
  
    var body = _.pick(req.body, "taskname", "completed");
  
    var va = {};
  
    if (!mct) {
      res.status(404).json({ error: "id not matched" });
    } else {
      va.taskname = body.taskname;
      va.completed = body.completed;
  
      _.extend(mct, va);
      res.json(mct);
    }
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
