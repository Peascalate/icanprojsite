const c = require('../cutil')

module.exports = function (app, opts, next) {
    app.get('/athena', (rq,re)=> {
        re.sendFile("html/s_athena.html");
    });
    app.get('/atlas', (rq,re)=> {
        re.sendFile("html/s_atlas.html");
    });
    app.get('/icarus', (rq,re)=> {
        re.sendFile("html/s_icarus.html");
    });
    app.get('/medusa', (rq,re)=> {
        re.sendFile("html/s_medusa.html");
    });
    app.get('/ares', (rq,re)=> {
        re.sendFile("html/s_ares.html");
    });
    app.get('/hades', (rq,re)=> {
        re.sendFile("html/s_hades.html");
    });
    app.get('/prometheus', (rq,re)=> {
        re.sendFile("html/s_prometheus.html");
    });
    app.get('/poseidon', (rq,re)=> {
        re.sendFile("html/s_poseidon.html");
    });
    app.get('/zeus', (rq,re)=> {
        re.sendFile("html/s_zeus.html");
    });
    app.get('/demeter', (rq,re)=> {
        re.sendFile("html/s_demeter.html");
    });
    c.info("Loaded routes from 'shirts.js'");
    next();
}

module.exports.autoPrefix = '/shirt'