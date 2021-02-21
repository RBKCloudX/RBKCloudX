const express = require("express");
const TokenRouter = express.Router();
const jwt = require("jsonwebtoken");
TokenRouter.get("/", (req, res, next) => {
  const header = req.headers["authorization"];
  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    const token = bearer[1];
    req.token = token;
    const access = jwt.verify(token, "zitouna");
    res.send(access.data);
    next();
  } else {
    //If header is undefined return Forbidden (403)
    res.sendStatus(403);
  }
});

module.exports.TokenRouter = TokenRouter;

// The user signs in with their password and username
// The server encodes a json web token payload that contains the unique identifier (i.e. user_id) of the user that signed in using the secret_key. An example function call may look something like this.
// payload = {user_id: 35} user_token = JWT.encode(payload, "your_secret_key");

// Return the user_token to the client and store said token in a hidden html tag or in a localStorage variable. Using Angular, I'd store it in localStorage.

// Now that the user is signed_in and the token is client-side, you can submit a GET request that contains the user_token as a parameter. Remember, this user_token payload contains the user_id.

// The server gets the parameter and decodes the user_token to get the user_id from the payload.

// You query the database with the user_id and return the data (first and last name) as plain json, NOT ENCODED.

// It's important to remember the only thing to encode in your example is the unique identifier (user_id). On each request you decode the token which itself is the authentication mechanism.
