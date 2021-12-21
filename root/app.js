import express from 'express'
import {engine} from "express-handlebars";
import {dirname} from 'path'
import {fileURLToPath} from "url";
import morgan from "morgan";

// temp--------------------------------------------------------------------
// import accountsModel from './models/accounts.model.js';
// import mongooseObject from './ulti/mongoose.js';
import bodyParser from "body-parser";
import writeBlog from './middlewares/writeBlogController.js';
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// temp--------------------------------------------------------------------


import db from './middlewares/connect_db.js';
// import { render } from 'express/lib/response';
db.connect();

// import {tmp, c} from './test.js'

// const express = require('express')
const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: true
}));


const __dirname = dirname(fileURLToPath(import.meta.url));
app.use('/public', express.static('public'));
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set("views", "./views");

// temp--------------------------------------------------------------------
app.get('/db', function (req, res) {
    res.render('write_blog',{})
})
app.post('/write',urlencodedParser, writeBlog.index);
// temp--------------------------------------------------------------------

app.get('/', function (req, res) {
    res.render('home', {})
})

const port = 3000;
app.listen(port, function () {
    console.log('Start listenning....')
})

