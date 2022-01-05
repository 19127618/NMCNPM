import express from "express";
import blogsModel from "../models/blogs.model.js";
import mongooseObject from '../ulti/mongoose.js'



class detailControlller {
    // [GET] /:slug
    show(req, res, next){
        blogsModel.findOne({slug: req.params.slug})
            .then( blog1 => {
                res.render('vwBlog/detail-blog', {
                    blog1: mongooseObject.mongooseToObject(blog1),
                    user: req.user
                },
                // console.log(blog1)
                )}
            )
            .catch(error => next(error));
    }
}

export default new detailControlller();

