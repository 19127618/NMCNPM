import express from "express";
import blogsModel from "../models/blogs.model.js";
import commentsModel from "../models/comments.model.js";
import mongooseObject from '../ulti/mongoose.js'



class detailControlller {
    // [GET] /:slug
    async show(req, res, next){
        const comments = await commentsModel.find({blog_id: req.params.slug}).lean();
        // console.log(comments)

        blogsModel.findOne({slug: req.params.slug})
            .then( blog => {
                res.render('vwBlog/detail-blog', {
                    blog: mongooseObject.mongooseToObject(blog),
                    user: req.user,
                    comment: comments
                },
                console.log(req.user)
                )
            }
            )
            .catch(error => next(error));
    }

    comment(req, res, next){
        console.log(req.body)
        if(!(req.body.username)){
            res.redirect(`/account/login`);
        }

        

        const newComment = {
            blog_id: req.body.blogId,
            content: req.body.contentComment,
            user_id: req.body.userId,
            username: req.body.username,
            create_time: new Date(),
        }
        new commentsModel(newComment).save();
        res.redirect(`/blog/detail/${req.body.blogId}`);
    }
}

export default new detailControlller();

