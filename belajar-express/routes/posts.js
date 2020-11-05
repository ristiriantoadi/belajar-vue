const express = require('express')
const router = express.Router()
const Post = require('../models/Post')




router.get('/', async (req,res)=>{
    try{
        const posts = await Post.find()
        res.json(posts)
    }catch(err){
        res.json({message:err})
    }
})

router.get('/:postId',async (req,res)=>{
    // res.send("we are on specific post")
    console.log(req.params.postId)
    try{
        const post = await Post.findById(req.params.postId)
        res.json(post)
    }catch(err){
        res.json({message:err})
    }
})

router.delete('/:postId',async (req,res)=>{
    // res.send("we are on specific post")
    console.log(req.params.postId)
    try{
        const removedPost = await Post.remove({_id:req.params.postId})
        res.json(removedPost)
    }catch(err){
        res.json({message:err})
    }
})

router.patch('/:postId',async (req,res)=>{
    console.log(req.params.postId)
    try{
        // const removedPost = await Post.remove({_id:req.params.postId})
        // res.json(removedPost)
        const updatedPost = await Post.updateOne(
            {_id:req.params.postId},
            {$set:{title:req.body.title}})
        res.json(updatedPost)
    }catch(err){
        res.json({message:err})
    }
})

router.post('/',async (req,res)=>{
    // console.log(req.body)
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    })
    console.log(req.body)
    try{
        const savedPost = await post.save()
        res.json(savedPost)
    }catch(error){
        // console.log(error)
        res.json({message:error})
    }
})

module.exports=router