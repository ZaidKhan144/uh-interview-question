const Directory = require("../models/Directory.js");

exports.getPeople = (req, res) => {
  Directory.findAll()
    .then((rows) => {
      res.json(rows);
    })
    .catch((err) => {
      res.status(500).send("Error retrieving all directories: ", err);
    })
};