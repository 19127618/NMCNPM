import express from "express";

const router = express.Router();

router.get('/detail', function (req, res){
    res.render('vwBlog/detail-blog');
});

router.get('/forum', function (req, res){
    res.render('vwBlog/forum');
});

router.get('/write', function (req, res){
    res.render('vwBlog/write_blog');
});

export default router;