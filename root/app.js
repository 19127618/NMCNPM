import express from 'express'
import {engine} from "express-handlebars";
import {dirname} from 'path'
import {fileURLToPath} from "url";
import morgan from "morgan";
import {tmp, c} from './test.js'

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

app.get('/', function (req, res) {
    res.render('home', {})
})

const port = 3000;
app.listen(port, function () {
    console.log('Start listenning....')
})