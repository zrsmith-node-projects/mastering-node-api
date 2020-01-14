const express = require("express");
const app = express();
const router = express.Router();
const routes = require("./routes.js");

const PORT = 5000;
app.use("/api", router);
router.get("/employees", routes.employees.listAllEmployees);

app.listen(PORT, () => {
  console.info(`\n** Server is listening on port ${PORT} **\n`);
});
