const c = require('../cutil')

module.exports = function (app, opts, next) {
    app.get('/', (rq,re)=> {
        re.sendFile("./assets/html/index.html");
    });
    c.info("Loaded routes from 'root.js'");
    next();
}

module.exports.autoPrefix = '/'