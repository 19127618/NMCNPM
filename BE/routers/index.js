const newSites = require('./SiteController');

function route(app){
    app.use('/write', newSites);
}

module.exports = route;