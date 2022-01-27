const c = require('../cutil')

module.exports = function (app, opts, next) {
    app.get('/', (rq,re)=> {
        re.sendFile("index.html");
    });
    c.info("Loaded routes from 'shirts.js'");
    next();
}

module.exports.autoPrefix = '/shirt'