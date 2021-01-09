const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  layouts = require("express-ejs-layouts");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/recipe_db", {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.log(
    "MongoDB connection error. Please make sure MongoDb is running.",
    err
  );
  process.exit();
});

db.once("open", function () {
  console.log("MongoDB running");
}).on("error", function (err) {
  console.log(err);
});

// const MongoDB = require("mongodb").MongoClient,
//   dbURL = "mongodb://localhost:27017",
//   dbName = "recipe_db";

// MongoDB.connect(dbURL, (error, client) => {
//   if (error) throw error;
//   let db = client.db(dbName);
//   db.collection("contacts")
//     .find()
//     .toArray((error, data) => {
//       if (error) throw error;
//       console.log(data);
//     });
// });

app.set("view engine", "ejs");
app.use(layouts);
app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignupForm);

// these must be last routes

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
