const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "blogX",
});

db.connect(function (err) {
  if (err) throw err;
  else {
    console.log("DB Connected!");
  }
});

module.exports = db;
