const express =require("express");

//import control class methods.
const {getPosts, createPost} = require("../controllers/posts.controller.js");

const router = express.Router();

//Diaplay the records in database (GET)
router.get("/",getPosts);
router.get("/",createPost)

module.exports=router;