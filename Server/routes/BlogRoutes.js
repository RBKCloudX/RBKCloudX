const express = require("express");
const router = express.Router();
const BlogControllers = require("../controllers/BlogControllers");

router.get("/", BlogControllers.getAll);

module.exports = router;
