const db = require("../DB/index");

module.exports = {
  getAll: (req, res) => {
    const q = "SELECT * FROM blogs ";
    db.query(q, (err, blogs) => {
      if (err) res.send(err);
      else {
        res.send(blogs);
      }
    });
  },
  getUserBlogs: (req, res) => {
    const query = `select * from blogs where id= "${req.params.id}" `;
    db.query(query, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
};

// module.exports.addPost = (req, res) => {
//   const query = `INSERT INTO blogs (title,body) VALUES("${req.body.title}","${req.body.body}")`;
// };
