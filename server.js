const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller");
// const mysql = require("mysql");
// const connection = require("./config/connection");


const PORT = process.env.PORT || 8080;

let app = express();


app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

// Listener 
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
