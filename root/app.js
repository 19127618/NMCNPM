import express from 'express'
import {dirname} from 'path'
import {fileURLToPath} from "url";
import morgan from "morgan";
import * as fs from 'fs';
import session from 'express-session';
import passport from './passport/index.js';

// temp--------------------------------------------------------------------


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
app.use(session({
    secret: "my-super-secret-key",
    // resave: true,
    // saveUninitialized: true,
    // cookie: {maxAge: 60000}
}));
app.use(passport.initialize());
app.use(passport.session());
// temp--------------------------------------------------------------------

const port = 3000;
app.listen(port, function () {
    console.log(`Start listening at http://localhost:${port}`);
})
let dir = './public/tmpfile';


