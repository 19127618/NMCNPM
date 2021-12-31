import express from "express";
import detailBlog from '../controller/detailBlogController.js';
import bodyParser from "body-parser";
import writeBlog from '../controller/writeBlogController.js';
import multer from "multer";


const router = express.Router();
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});


router.get('/detail/:slug', detailBlog.show);
// function (req, res){
//     res.render('vwBlog/detail-blog');
// });

router.get('/forum', function (req, res) {
    res.render('vwBlog/forum');
});

router.get('/write', function (req, res, next) {
    res.render('vwBlog/write-blog');
    // res.render('vwBlog/createBlog');
});

// router.post('/write', writeBlog.index);

router.post('/write', async function (req, res) {
    let idBlog = await writeBlog.index(req, res);

    console.log(req.body);
});


export default router;