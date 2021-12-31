import express from "express";

const router = express.Router();

router.get('/blog', function (req, res){
    res.render('vwAdmin/blog');
});
export default router;