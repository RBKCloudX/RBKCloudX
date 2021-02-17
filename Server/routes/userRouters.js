const express = require("express");
const userRouters = express.Router();
const userController = require("../controllers/userController");

userRouters.post("/api/users", userController.signUp);
userRouters.post("/api/users/signin", userController.signIn);
module.exports = userRouters;
