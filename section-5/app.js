const express = require("express");
const app = express();
const router = express.Router();

app.use("/api", router);
router.get("/employees", (req, res) => {
  res.send(data);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.info(`\n** Server is listening on port ${PORT} **\n`);
});
