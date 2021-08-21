const express = require("express");

//import control class methods.
const {
  getPosts,
  createPost,
  updatePost,
} = require("../controllers/posts.controller.js");

const router = express.Router();

//Diaplay the records in database (GET)
router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);

module.exports = router;
