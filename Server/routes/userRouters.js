const express = require("express");
const userRouters = express.Router();
const userController = require("../controllers/userController");

userRouters.post("/signup", userController.signUp);
userRouters.post("/signin", userController.signIn);
module.exports = userRouters;
