const fs = require("fs");
const filePath = "data.json";
let jsonData = {};

const readFile = (path) => {
  const data = fs.readFileSync(path, "utf-8");
  jsonData = JSON.parse(data);
};
readFile(filePath);

exports.getUser = async (req, res) => {
  try {
    if (jsonData) res.status(200).json({ status: "success", data: jsonData });
  } catch (error) {
    console.log("Error in getUser " + error.message);
  }
};
