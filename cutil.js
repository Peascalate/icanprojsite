var colors = require('colors')
function info(txt) {
    console.log(("[info]> " + txt).cyan);
}

function warn(txt) {
    console.log(("[warn]> " + txt).yellow);
}

function error(txt) {
    console.log(("[error]> " + txt).red);
}

function success(txt) {
    console.log(("[success]> " + txt).green);
}


exports.info = info;
exports.warn = warn;
exports.error = error;
exports.success = success;
