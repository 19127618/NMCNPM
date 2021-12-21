import accountRoute from '../routes/account.route.js';

export default function (app) {
    app.get('/', function (req, res) {
       res.render('home')
    });

    app.use('/account', accountRoute);
}