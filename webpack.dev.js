var baseConfig = require('./webpack.common.js');
var webpackMerge = require('webpack-merge');
var path = require('path');
var serveStatic = require('serve-static');
module.exports = webpackMerge(baseConfig, {
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 9000,
        setup: function (app) {
            app.use('/bower_components', serveStatic(__dirname + '/bower_components', {}));
            app.use('/api', serveStatic(__dirname + '/api', {}));
        }
    }
});