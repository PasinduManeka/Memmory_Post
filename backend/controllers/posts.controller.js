const mongoose = require("mongoose");
const PostMessage = require("../models/postMessage.models.js");

//get all blogs
const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ messsage: error.message });
  }
};

//create a new post
const createPost = async (req, res) => {
  //assign requested body
  const post = req.body;

  //create new post
  const newPost = new PostMessage(post);
  try {
    //save the post
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    res.status(404).Json({ message: error.message });
  }
};

//update the post
const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  console.log(_id);
  console.log(post);

  //*Check is tho mongoose id
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id.");

  //*Save the updated details
  const newUpdatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );

  res.json(newUpdatedPost);
};

module.exports = { getPosts, createPost, updatePost };
