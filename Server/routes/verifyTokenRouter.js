const express = require("express");
const TokenRouter = express.Router();
const jwt = require("jsonwebtoken");
TokenRouter.get("/:token", (req, res) => {
  const access = jwt.verify(req.params.token, "secret");
  console.log(access);
  res.send(access.data);
});

module.exports.TokenRouter = TokenRouter;
