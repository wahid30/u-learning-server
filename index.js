const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const course = require("./data/course.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/course", (req, res) => {
  res.send(course);
});

app.get("/course-category", (req, res) => {
  res.send(categories);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedcourse = course.find((n) => n._id === id);
  res.send(selectedcourse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
