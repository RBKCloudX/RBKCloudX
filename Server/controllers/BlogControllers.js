const db = require("../../DB/index");

exports.getAll = (req, res) => {
  var q = "SELECT * FROM blogs";
  db.query(q, (err, blogs) => {
    if (err) res.send(err);
    else {
      res.send(blogs);
    }
  });
};
