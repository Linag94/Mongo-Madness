// require npm packages
var express = require("express");
var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var mongoose = require("mongoose");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var exhb = require("express-handlebars");
app.engine("handlebars", exhb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require('./routes');
app.use(routes);

app.listen(PORT, function(){
    console.log("Listening on PORT: %s", PORT);
})