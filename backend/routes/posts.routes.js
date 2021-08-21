const express = require("express");

//import control class methods.
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/posts.controller.js");

const router = express.Router();

//* Diaplay the records in database (GET)
router.get("/", getPosts);
//* Create a new post
router.post("/", createPost);

//* Update the blog
router.patch("/:id", updatePost);

//* Delete the blogs
router.delete("/:id", deletePost);

module.exports = router;
