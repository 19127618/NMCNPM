import express from "express";

const router = express.Router();

router.get('/login', function (req, res){
    res.render('vwAccount/login', {
        layout: false
    });
});

router.get('/profile', function (req, res) {
    res.render('vwAccount/profile');
});

export default router;