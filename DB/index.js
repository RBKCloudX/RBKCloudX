const mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Moondust#512",
  database: "blogX",
});

db.connect(function (err) {
  if (err) throw err;
  else {
    console.log("DB Connected!");
  }
});

module.exports = db;
