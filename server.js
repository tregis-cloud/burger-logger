const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const PORT = process.env.PORT || 8080;

const app = express();


app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//View Routes
app.get("/", function (req, res){
    res.render("index");
});

//API Routes
app.get("/api/config", function (req, res){
    res.json({ success: true,
    });
});
// var routes = require("./controllers/catsController.js");

// app.use(routes);

// Start server 
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
