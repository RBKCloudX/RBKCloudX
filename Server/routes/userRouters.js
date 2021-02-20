const express = require("express");
const userRouters = express.Router();
const userController = require("../controllers/userController");

userRouters.post("/signup", userController.signUp);
userRouters.post("/signin", userController.signIn);
userRouters.get("/user/:id", userController.getUserdata);
userRouters.get("/user/email/:email", userController.getUserBlogs);

module.exports = userRouters;
