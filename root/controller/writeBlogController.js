import express from "express";
import blogsModel from "../models/blogs.model.js";
import { v4 as uuidv4 } from 'uuid';
import * as fs from "fs";
import multer from "multer";
import {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

class writeBlog{

    async index(req, res, next){
        await blogsModel.create({
            blog_id: uuidv4(),
            title: req.body.title,
            content: req.body.content,
            price: req.body.price,
            priceUnit: req.body.priceUnit,
            // image: link,
            vehicle: req.body.vehicle,
            type: req.body.type,
            address: req.body.address,
        })
        .then(result => {
            let id = result['blog_id'];
            let dir='./public/assets/images/blog/'+id;
            fs.mkdir(dir, { recursive: true }, (err) => {
                if (err) {
                    throw err;
                }
                console.log("Directory is created.");
                // res.redirect('/');
                console.log(__dirname.toString())
                let dir = './public/assets/images/user_blog/';
                const storage = multer.diskStorage({
                    destination: function (req, file, cb) {
                        cb(null, dir);
                    },
                    filename: function (req, file, cb) {
                        let type = file.originalname.split('.');
                        cb(null, id+'.'+type[type.length-1]);
                    }
                })

                const upload = multer({storage: storage});
                upload.single('coverImage')(req, res, function (err) {
                    if (err instanceof multer.MulterError) {
                        // A Multer error occurred when uploading.
                    } else if (err) {
                        console.log(err);
                    }

                    // Everything went fine.
                })
            });
            return id;

        })
        .catch(error => console.error(error))
}}

export default new writeBlog();