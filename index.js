const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000; //localhost:5000

app.use(cors());

// for categories
const categories = require("./data/categories.json");
// for all courses
const course = require("./data/course.json");
// for platform courses
const platform = require("./data/ptalform.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/course", (req, res) => {
  res.send(course);
});

app.get("/course-category", (req, res) => {
  res.send(categories);
});
app.get("/platform", (req, res) => {
  res.send(platform);
});
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id == "08") {
    res.send(course);
  } else {
    const selectedCourse = course.filter((n) => n.category_id === id);
    res.send(selectedCourse);
  }
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = course.find((n) => n._id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
