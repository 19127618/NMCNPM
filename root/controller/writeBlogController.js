import express from "express";
import blogsModel from "../models/blogs.model.js";
import { v4 as uuidv4 } from 'uuid';

class writeBlog{
    index(req, res){
        
        blogsModel.create({
            blog_id: uuidv4(),
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