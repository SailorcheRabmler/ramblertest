//'use strict';
//var path = require('path');
//var express = require('express');

//var app = express();

//var staticPath = path.join(__dirname, '/');
//app.use(express.static(staticPath));

//// Allows you to set port in the project properties.
//app.set('port', process.env.PORT || 3000);

//var server = app.listen(app.get('port'), function () {
//    console.log('listening');
//});


'use strict';
var http = require('http');
var fs = require('fs');
var PORT = 8080;

http.createServer((req, res) => {
    fs.readFile('./' + req.url, (err, data) => {
        if (!err) {
            var dotoffset = req.url.lastIndexOf('.');
            var mimetype = dotoffset == -1 ? 'text/plaint' : {
                '.html': 'text/html',
                '.css': 'text/css',
                '.js': 'text/javascript',
                '.jpg': 'image/jpeg',
                '.png': 'image/png',
                '.ico': 'image/x-icon',
                '.gif': 'image/gif'
            }[req.url.substr(dotoffset)];
            res.setHeader('Content-Type', mimetype);
            res.end(data);
            console.log(req.url, mimetype);
        } else {
            console.log('File not fount: ' + req.url);
            res.writeHead(404, "Not Found");
            res.end();
        }

    });

}).listen(PORT);