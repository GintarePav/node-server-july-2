// Express variables
const express = require("express");
const app = express();

// Cors variables
const cors = require("cors");
app.use(cors());

// Data variables
const fs = require("fs");
const students = JSON.parse(
  fs.readFileSync("../../data/student_data.json", "utf-8")
);

// Route
app.get("/api/students", (req, res) => {
  res.json(students);
});

// Server variables and listening
const port = 8080;
const hostname = "127.0.0.1";
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
