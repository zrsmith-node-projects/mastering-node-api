const data = require("../section-2/data.json");
function listAllEmployees(req, res) {
  return res.status(200).json(data);
}

module.exports = {
  listAllEmployees
};
