const http = require("http");
const url = require("url");

const data = require("./data.json");

function listAllEmployees(req, res) {
  res.statusCode = 200;
  res.end(JSON.stringify(data));
}

function addEmployee(req, res) {
  let body = "";

  req.on("data", chunk => (body += chunk.toString()));
  req.on("end", () => {
    data.push(JSON.parse(body));
    req.statusCode = 201;
    return res.end(`${JSON.parse(body).name} added`);
  });
  req.on("error", error => {
    res.statusCode = 400;
    return res.end(error);
  });
}

const server = http.createServer((req, res) => {
  const urlParts = url.parse(req.url);
  if (urlParts.pathname === "/api/employees") {
    switch (req.method) {
      case "GET":
        listAllEmployees(req, res);
        break;
      case "POST":
        addEmployee(req, res);
        break;
      default:
        break;
    }
  }
});

const PORT = 5555;

server.listen(PORT, () => {
  console.info(`\n-- Server is running on ${PORT} --\n`);
});
