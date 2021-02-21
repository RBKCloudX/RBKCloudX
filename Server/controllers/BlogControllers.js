const db = require("../DB/index");

module.exports = {
  getAll: (req, res) => {
    const q = "SELECT * FROM blogs ORDER BY createdAt DESC";
    db.query(q, (err, blogs) => {
      if (err) res.send(err);
      else {
        res.send(blogs);
      }
    });
  },
  getUserBlogs: (req, res) => {
    const query = `select * from blogs where id= "${req.params.id}" ORDER BY createdAt DESC`;
    db.query(query, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  newStory: (req, res) => {
    const query = `SELECT id FROM users WHERE email= "${req.body.email}"`;
    db.query(query, (err, result) => {
      console.log("==>", result);
      if (err) {
        res.send(err);
      } else {
        const sql = `INSERT INTO blogs (id, title, body) VALUES("${result[0].id}", "${req.body.title}", "${req.body.body}")`;
        db.query(sql, (err, result) => {
          if (err) {
            res.send(err);
          } else {
            res.send("done");
          }
        });
      }
    });
  },
  updateStory: (req, res) => {
    const query = `UPDATE blogs SET title = "${req.body.title}", body = "${req.body.body}" WHERE post_id= "${req.params.id}"`;
    db.query(query, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send("done");
      }
    });
  },
};
