"use strict";
var test;
// adding this comment
// change to branch 1.xxx

const port = 3000,
  express = require("express"),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  layouts = require("express-ejs-layouts"),
  path = require("path"),
  app = express();

var options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["htm", "html"],
  index: false,
  maxAge: "1d",
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Date.now());
  },
};

// Serve Static Assets
app.use(express.static("../public/html", options));

// app.use("/public", express.static("public/html"));

app.set("view engine", "ejs");

app.use(layouts);

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use((req, res, next) => {
  //console.log(req);
  if (req.method === "POST") console.log(`post request made to: ${req.url}`);
  if (req.method === "GET") console.log(`query request made to: ${req.url}`);

  next();
});

app.use(express.json()); // tell express to parse url-encoded data

app.post("/", (req, res) => {
  console.log(`request body: ${JSON.stringify(req.body)}`);
  console.log(`request query: ${JSON.stringify(req.query)}`);
  console.log("POST successful");
  res.send("Hello, universe!");
}); // create a new post route for home page and log the body

app.get("/name/:myName", homeController.respondWithName);

app.get("/", (req, res) => {
  showMeParts(req);
  res.send("Hello, universe!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

app.post("/contact", (req, res) => {
  showMeParts(req);
  res.send("Contact information submitted successfully post");
});

app.get("/items/:vegetable", homeController.sendReqParam);
app.post("/sign_up", homeController.user_SignUpProcessor);

app.use(errorController.logeErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(port, () => {
  console.log(
    `The express.js server has strted and is listening on port number: ${port}`
  );
});

var showMeParts = (req) => {
  console.log(`params ${JSON.stringify(req.params)}`);
  console.log(`body ${req.body}`);
  console.log(`url ${req.url}`);
  console.log(`query ${JSON.stringify(req.query)}`);
};
