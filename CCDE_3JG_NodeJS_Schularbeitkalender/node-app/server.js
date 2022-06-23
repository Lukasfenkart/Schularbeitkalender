var express = require('express'); // handles requests + responses
var path = require('path'); // path module provides utilities for working with file and directory paths
var bodyParser = require('body-parser'); //needed to parse request params
var MongoClient = require('mongodb').MongoClient;

// create app
var app = express();

// configure app
// Serve Static Assets
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const PORT = process.env.PORT || 8080;

// Serve Static Assets
app.use(express.static('public'));

//HTTP POST
app.post('/Sak', function (req,res){
    console.log("body: " + JSON.stringify(req.body));
    console.log("Fach1: " + req.body.Fach1);
    console.log("Datum1: " + req.body.Datum1);

    // Prepare output in JSON format
    var response = {
        Fach1:req.body.Fach1,
        Datum1:req.body.Datum1
    };

    res.end(JSON.stringify(response));
});

//create database
var url = "mongodb://mongoadmin:mypasswd@10.115.3.30:8017/SaK";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

//create collection
var url = "mongodb://mongoadmin:mypasswd@10.115.3.30:8017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("SaK");
  dbo.createCollection("Schularbeiten", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

//insert in database
MongoClient.connect(url, function(err, db, req) {
  if (err) throw err;
  var dbo = db.db("SaK");
  var myobj = { Fach1: req.body.Fach1, Datum1: req.body.Datum1 };
  dbo.collection("Schularbeiten").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

app.listen(PORT, () => {
    console.log('Server connected at:', PORT);
});