const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
const port = 5050;

app.use(express.static('public'));
app.use(express.static('files'));

app.use("/static", express.static("static")); //for seerving static file
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

//set the views directory
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/Poems.html", (req, res) => {
  res.status(200).render("Poems.html");
});

app.get("/blog1.html", (req, res) => {
  res.status(200).render("blog1.html");
});

app.get("/blogs.html", (req, res) => {
  res.status(200).render("blogs.html");
});

app.get("/Life_Never_Ending_Loop.html", (req, res) => {
  res.status(200).render("Life_Never_Ending_Loop.html");
});

app.get("/The_Fake_Illusion_Of_Dharma.html", (req, res) => {
  res.status(200).render("The_Fake_Illusion_Of_Dharma.html");
});

app.get("/index.html", (req, res) => {
  res.status(200).render("index.html");
});

app.get("/contact.html", (req, res) => {
  res.status(200).render("contact.html");
});

app.get("/Climb_Till_Your_Dream_Comes_True.html", (req, res) => {
  res.status(200).render("Climb_Till_Your_Dream_Comes_True.html");
});

app.get("/Start_Where_you_stand.html", (req, res) => {
  res.status(200).render("Start_Where_you_stand.html");
});

app.get("/Phoenix.html", (req, res) => {
  res.status(200).render("Phoenix.html");
});

app.listen(port, () => {
  console.log(`The application started successfully on port : ${port}`);
});
