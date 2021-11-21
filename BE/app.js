const express = require('express');
const cmdLog = require('morgan');
const exphbs  = require('express-handlebars');
const app = express();

app.use(cmdLog('dev'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(3000);