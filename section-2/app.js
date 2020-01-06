const http = require("http");
const url = require("url");

const data = require("./data.json");

function listAllEmployees(req, res) {
  res.statusCode = 200;
  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  const urlParts = url.parse(req.url);
  if (urlParts.pathname === "/api/employees") {
    switch (req.method) {
      case "GET":
        listAllEmployees(req, res);
        break;
      default:
        break;
    }
  }
});

server.listen(5555, () => {
  console.info("server is running on  5555");
});
