import accountRoute from '../routes/account.route.js';
import blogRoute from '../routes/blog.route.js';
import {upload, uploadImg} from '../controller/uploadImgController.js'


export default function (app) {
    app.get('/', function (req, res) {
       res.render('home')
    });

    app.use('/account', accountRoute);
    app.use('/blog', blogRoute);


}