const http = require("http");
const path = require("path");
const url = require("url");
const hostname = "127.0.0.1";
const port = 3000;

const fs = require("fs");
const students = JSON.parse(
  fs.readFileSync("../data/student_data.json", "utf-8")
);

const searchStudent = require("./modules/searchStudent");
const sortByLastName = require("./modules/sortByLastName");

const calculateAvg = require("./modules/calculateAverages");
calculateAvg(students.moksleiviai);

let studentAverages = fs.readFileSync("./files/averages.txt", "utf-8");
studentAverages = studentAverages.replace(/\s+/g, "");
studentAverages = JSON.parse(studentAverages);

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  console.log("Pathway:", `http://${hostname}:${port}${pathname}`);
  switch (pathname) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>This is home.</h1>");
      break;
    case "/api/students":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(students));
      break;
    case "/api/students/search":
      if (query.class) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify(
            searchStudent(students.moksleiviai, "class", query.class)
          )
        );
      } else if (query.name) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify(
            searchStudent(students.moksleiviai, "firstName", query.name)
          )
        );
      } else if (query.surname) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify(
            searchStudent(students.moksleiviai, "lastName", query.surname)
          )
        );
      } else {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "wrong query" }));
      }
      break;
    case "/api/students/sorted":
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify(sortByLastName(students.moksleiviai)));
      break;
    case "/api/students/averages":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify(searchStudent(studentAverages, "class", query.class))
      );
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>Page not found</h1>");
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
