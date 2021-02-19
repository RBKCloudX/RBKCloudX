const db = require("../DB/index");

exports.getAll = (req, res) => {
  const q = "SELECT * FROM blogs INNER JOIN users on ";
  db.query(q, (err, blogs) => {
    if (err) res.send(err);
    else {
      res.send(blogs);
    }
  });
};

// module.exports.addPost = (req, res) => {
//   const query = `INSERT INTO blogs (title,body) VALUES("${req.body.title}","${req.body.body}")`;
// };
