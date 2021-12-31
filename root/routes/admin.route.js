import express from "express";
import {index, approve} from '../controller/adminApproveController.js'


const router = express.Router();

// router.get('/blog', function (req, res){
//     res.render('vwAdmin/blog');
// });

router.get('/blog', index);
router.get('/approve', approve);


export default router;