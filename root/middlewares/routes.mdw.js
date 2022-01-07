import accountRoute from '../routes/account.route.js';
import blogRoute from '../routes/blog.route.js';
import adminRoute from '../routes/admin.route.js'
import blog from '../controller/blogController.js';

import session from 'express-session';
import passport from '../passport/index.js';

export default function (app) {
    // app.get('/', function (req, res) {
    //    res.render('home')
    // });
    // temp--------------------------------------------------------------------
    app.use(session({
        secret: "my-super-secret-key",
        // resave: true,
        // saveUninitialized: true,
        // cookie: {maxAge: 60000}
    }));
    app.use(passport.initialize());
    app.use(passport.session());
// temp--------------------------------------------------------------------

    app.get('/', blog.index);


    app.use('/account', accountRoute);
    app.use('/blog', blogRoute);
    app.use('/admin', adminRoute);


}