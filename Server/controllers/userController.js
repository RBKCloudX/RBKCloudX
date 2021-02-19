const db = require("../DB/index");
// we need to import bicrypt
const bcrypt = require("bcrypt");
const saltRounds = 10;
const path = require("path");
// jwt to generate a token for each user
const jwt = require("jsonwebtoken");

module.exports = {
  signUp: async (req, res) => {
    try {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const query = `INSERT INTO users(firstName,lastName,username,email,imageUrl,bday,password) VALUES("${req.body.first_name}","${req.body.last_name}","${req.body.username}","${req.body.email}","${req.body.imageUrl}","${req.body.bday}","${hash}")`;
      db.query(query, (err, finalResult) => {
        if (err) {
          res.send(err);
        } else {
          // generate a token then send it back to the front
          const token = jwt.sign(
            {
              data: req.body.username,
            },
            "secret",
            { expiresIn: "24h" }
          );
          res.send({
            username: req.body.username,
            email: req.body.email,
            token: token,
          });
        }
      });
      // if not we will execute the following
      // that means username and email does not exist, you can save new data
    } catch (error) {
      res.send(error);
    }
  },

  signIn: (req, res) => {
    return new Promise((reject, resolve) => {
      const query = `select password from users where email = "${req.body.email}"`;
      db.query(query, (err, result) => {
        if (err) {
          reject(err);
        } else {
          bcrypt.compare(
            req.body.password,
            result[0].password,
            (err, result) => {
              if (err) {
                res.send(err);
              } else {
                res.send(result);
              }
            }
          );
        }
      });
    });
  },
};
