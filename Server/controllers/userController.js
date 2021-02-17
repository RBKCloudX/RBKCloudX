const db = require("../../DB/index");
// we need to import bicrypt
const bcrypt = require("bcrypt");
const saltRounds = 10;
//
module.exports = {
  signUp: async (req, res) => {
    try {
      bcrypt.genSalt(saltRounds, function (err, salt) {
        if (err) {
          throw err;
        } else {
          bcrypt.hash(req.body.password, salt, function (err, hash) {
            // Store hash in your password DB.
            if (err) {
              console.log(err);
            } else {
              const query = `INSERT INTO users(firstName,lastName,username,email,bday,password) VALUES("${req.body.first_name}","${req.body.last_name}","${req.body.username}","${req.body.email}","${req.body.bday}","${hash}")`;
              db.query(query);
            }
          });
        }
      });
      res.send("ok");
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
