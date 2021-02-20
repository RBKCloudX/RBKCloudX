const express = require("express");
const router = express.Router();
const BlogControllers = require("../controllers/BlogControllers");

router.get("/", BlogControllers.getAll);
router.get("/:id", BlogControllers.getUserBlogs);
router.post("/newStory", BlogControllers.newStory);
module.exports = router;
