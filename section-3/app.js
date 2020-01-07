const express = require("express");
const app = express();

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
