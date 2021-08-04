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

const createPost = (req,res)=>{
    try{

    }catch (error){

    }
}

module.exports={getPosts, createPost};
