var express = require('express'); // handles requests + responses
var path = require('path'); // path module provides utilities for working with file and directory paths
var bodyParser = require('body-parser'); //needed to parse request params

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
app.post('/sayhello', function (req,res){
    console.log("body: " + JSON.stringify(req.body));
    console.log("name1: " + req.body.name1);

    // Prepare output in JSON format
    var response = {
        name1:req.body.name1,
        salutation: 'Hallo 3bWI'
    };

    res.end(JSON.stringify(response));
});

app.post('/sayalter', function (req,res){
    console.log("body: " + JSON.stringify(req.body));
    console.log("alter1: " + req.body.alter1);

    // Prepare output in JSON format
    var response = {
        alter1:req.body.alter1,
        salutation: 'You are:'
    };

    res.end(JSON.stringify(response));
});

app.post('/bmi', function (req,res){
    console.log("body: " + JSON.stringify(req.body));
    console.log("height: " + req.body.height);
    console.log("weight: " + req.body.weight);


    var response = {
    bmi:req.body.weight/(req.body.height/100 * req.body.height/100),
    };

    res.end(JSON.stringify(response));
});

app.listen(PORT, () => {
    console.log('Server connected at:', PORT);
});
