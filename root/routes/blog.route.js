import express from "express";
import detailBlog from '../controller/detailBlogController.js';
import bodyParser from "body-parser";
import writeBlog from '../controller/writeBlogController.js';
import multer from "multer";
import fs from "fs";
import { v4 as uuidv4 } from 'uuid';


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

router.post('/write',  (req, res)=> {
    let idBlog = uuidv4();
    const storage = multer.diskStorage({
        destination: async function (req, file, cb) {
            // const result =  await writeBlog.index(req);
            // console.log(req);
            // console.log(result);
            // idBlog = result['blog_id'];
            let dir='./public/assets/images/blog/'+idBlog;
            fs.access(dir, function (error) {
                if (error) {
                    console.log("Directory does not exist.");
                    return fs.mkdir(dir, (error) => cb(error, dir));
                } else {
                    console.log("Directory exists.");
                    return cb(null, dir);
                }
            });
        },
        filename: function (req, file, cb) {
            let type = file.originalname.split('.');
            cb(null, idBlog+'.'+type[type.length-1]);
        }
    })

    const upload = multer({storage: storage});
    upload.single('coverImage')(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
        } else if (err) {
            console.log(err);
        }
        console.log(req.file)
        const blogInfo = {
            id: idBlog,
            imageName: req.file.filename
        }
        // Everything went fine.
        console.log(blogInfo);
        writeBlog.index(req, blogInfo);

    })
    res.redirect('/');
});


export default router;