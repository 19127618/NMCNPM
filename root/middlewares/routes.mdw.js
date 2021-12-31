import accountRoute from '../routes/account.route.js';
import blogRoute from '../routes/blog.route.js';
import adminRoute from '../routes/admin.route.js'
import {upload, uploadImg} from '../controller/uploadImgController.js'
import blog from '../controller/blogController.js';

export default function (app) {
    // app.get('/', function (req, res) {
    //    res.render('home')
    // });
    app.get('/', blog.index);


    app.use('/account', accountRoute);
    app.use('/blog', blogRoute);
    app.use('/admin', adminRoute);


}