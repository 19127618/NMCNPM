const express = require('express');
const cmdLog = require('morgan');
const exphbs  = require('express-handlebars');
const path = require('path');
const port = 3000;



const app = express();
const route = require('./routers');

//log
app.use(cmdLog('dev'));

//template engine
app.use(express.static(path.join(__dirname,'/public')));
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})