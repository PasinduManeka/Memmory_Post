const PostMessage = require("../models/postMessage.models.js")

const getPosts = async(req,res)=>{
    try{
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    }catch (error){
        res.status(404).json({messsage:error.message});
    }
}

const createPost = async (req,res)=>{
    //assign requested body
    const post = req.body;
    
    //create new post
    const newPost = new PostMessage(post);
    try{
        //save the post
        await newPost.save()
        res.status(201).Json(newPost);
    }catch (error){
        res.status(404).Json({message:error.message});
    }
}

module.exports={getPosts, createPost};
