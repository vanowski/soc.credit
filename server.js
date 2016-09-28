var express = require('express');
var path = require('path');

var server = express();

server.use(express.static('build'));

server.get('/', function(req, res) {
    res.sendFile(path.resolve('build/index.html'));
});

server.get('/results', function(req, res) {
    res.sendFile(path.resolve('build/results.html'));
});

server.get('/data', function(req, res) {
    res.sendFile(path.resolve('data/variants.json'));
});

server.listen(9000, function() {
    console.log('Serving from ' + path.resolve('./'));
});