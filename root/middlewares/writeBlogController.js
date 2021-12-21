import express from "express";
import blogsModel from "../models/blogs.model.js";

class writeBlog{
    index(req, res){
        
        blogsModel.create({
        title: req.body.title,
        content: req.body.content,
    })
    .then(result => {
        console.log(result)
        res.render('home', {})
    })
    .catch(error => console.error(error))
}}

export default new writeBlog();