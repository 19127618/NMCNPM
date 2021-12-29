import express from "express";
import blogsModel from "../models/blogs.model.js";
import { v4 as uuidv4 } from 'uuid';

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
            res.redirect('/');
        })
        .catch(error => console.error(error))
}}

export default new writeBlog();