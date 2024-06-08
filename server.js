const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 5000;

app.use(express.static("public"));
app.use(expressLayouts);
//app.set("layout", "./layouts/full-width");
app.set("view engine", "ejs");

// Routes
app.get("", (req, res) => {
  res.render("index", {
    title: "Home Page",
    layout: "./layouts/full-width",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    layout: "./layouts/full-width",
  });
});

// mở cổng server
app.listen(port, () => {
  console.log("app listening on url http://localhost:" + port);
});
