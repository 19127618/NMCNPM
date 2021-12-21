import express from 'express'
import {dirname} from 'path'
import {fileURLToPath} from "url";
import morgan from "morgan";

// temp--------------------------------------------------------------------

import bodyParser from "body-parser";
import writeBlog from './controller/writeBlogController.js';
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// temp--------------------------------------------------------------------

import accountsModel from './models/accounts.model.js';
import activate_view_middleware from './middlewares/view.mdw.js';
import activate_route_middleware from './middlewares/routes.mdw.js';

import db from './middlewares/connect_db.js';
// import { render } from 'express/lib/response';
db.connect();

// import {tmp, c} from './test.js'

// const express = require('express')
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: true
}));
app.use('/public', express.static('public'));

activate_view_middleware(app);
activate_route_middleware(app);

// temp--------------------------------------------------------------------
app.post('/write',urlencodedParser, writeBlog.index);
// temp--------------------------------------------------------------------

const port = 3000;
app.listen(port, function () {
    console.log(`Start listening at http://localhost:${port}`);
})

