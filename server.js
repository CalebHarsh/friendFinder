//Dependencies used
var express = require("express");
var bodyParser = require("body-parser");

//Setting up basic config for express
var app = express();
app.use(express.static("public"))

//Setting up initial port
var PORT = process.env.PORT || 3000;

//sets up express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Handles routes.  Will change later
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener to "start" server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});