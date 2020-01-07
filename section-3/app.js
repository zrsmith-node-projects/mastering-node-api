const express = require("express");
const app = express();

const data = require("../section-2/data.json");

const router = express.Router();
app.use("/api/", router);

router.get("/employees", (req, res) => {
  res.send(data);
});

router.get("/employees/:id", (req, res) => {
  const id = +req.params.id;
  // Nothing shows up with === because of string compared to integer, so == or add + in front of req.params.id
  // const employee = data.filter(d => d.id == id);

  const employee = data.filter(d => d.id === id);
  return res.send(employee);
});

// app.get("/api/employees", (req, res) => {
//   res.send("Hello from Express");
// });
// app.post("/api/employees", (req, res) => {
//   res.send("Hello from POST from Express");
// });

// app.all("/api/employees", (req, res) => {
//   res.send(`${req.method} in action`);
// });

// app
//   .route("/api/employees")
//   .get((req, res) => {
//     res.send("GET");
//   })
//   .post((req, res) => {
//     res.send("POST");
//   });

const PORT = 3000;

app.listen(PORT, () => {
  console.info(`Server is listening on ${PORT}`);
});
