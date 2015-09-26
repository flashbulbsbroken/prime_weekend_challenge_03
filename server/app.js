var express = require('express');

var studentData = require('../models/data');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    console.log('Empty Route');
    response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/getStudentData', function(request, response) {
    console.log('Student Route');
    response.send(studentData);
});

var server = app.listen(process.env.PORT, function() {
        var port = server.address().port;
        console.log('Listening on port: ', port);
});

module.exports = app;