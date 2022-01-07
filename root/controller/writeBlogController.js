import express from "express";
import blogsModel from "../models/blogs.model.js";


import multer from "multer";
import {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

class writeBlog{

    async index(req, blogInfo,next){
        // console.log("\n",req.body,"\n")
        return await blogsModel.create({
            blog_id: blogInfo.id,
            user_id: req.body.userId,
            title: req.body.title,
            content: req.body.content,
            price: req.body.price,
            priceUnit: req.body.priceUnit,
            image: blogInfo.imageName,
            vehicle: req.body.vehicle,
            type: req.body.type,
            address: req.body.address,
        })
        // .then(result => {
        //     let id = result['blog_id'];
        //     return id;
            // fs.mkdir(dir, { recursive: true }, (err) => {
            //     if (err) {
            //         throw err;
            //     }
            //     console.log("Directory is created.");
            //     // res.redirect('/');
            //     console.log(__dirname.toString())
            //     let dir = './public/assets/images/user_blog/';
            // });


        // })
        .catch(error => console.error(error))
}}

export default new writeBlog();