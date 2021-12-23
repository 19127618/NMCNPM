import express from "express";
import detailBlog from '../controller/detailBlogController.js';


const router = express.Router();

router.get('/detail/:slug', detailBlog.show);
// function (req, res){
//     res.render('vwBlog/detail-blog');
// });

router.get('/forum', function (req, res){
    res.render('vwBlog/forum');
});

router.get('/write', function (req, res){
    res.render('vwBlog/write-blog');
});

export default router;