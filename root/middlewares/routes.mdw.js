import accountRoute from '../routes/account.route.js';
import blogRoute from '../routes/blog.route.js';
import {upload, uploadImg} from '../controller/uploadImgController.js'


export default function (app) {
    app.get('/', function (req, res) {
       res.render('home')
    });

    app.use('/account', accountRoute);
    app.use('/blog', blogRoute);

    // temp--------------------------------------------------------------------
    // app.get('/test', (req, res) => {
    //     res.send(`
    //       <h2>With <code>"express"</code> npm package</h2>
    //       <form action="/uploadfile" enctype="multipart/form-data" method="post">
    //         <div>Text field title: <input type="text" name="title" /></div>
    //         <div>File: <input type="file" name="myFile" multiple="multiple" /></div>
    //         <input type="submit" value="Upload" />
    //       </form>
    //     `);
    //   });

    // app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    //     const file = req.file
    //     console.log(file)
    //     if (!file) {
    //       const error = new Error('Please upload a file')
    //       error.httpStatusCode = 400
    //       return next(error)
    //     }
    //     res.send(file)
    //   })
    // temp--------------------------------------------------------------------

}