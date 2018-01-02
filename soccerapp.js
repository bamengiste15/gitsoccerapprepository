var express = require('express'); //express module must be installed using NPM
var app = express(); //create app
var path = require('path'); //built in path module, used to resolve paths of relative files
var port = 3700 //stores port number to listen on

app.use(express.static(path.join(__dirname + '/'))); //allows html file to reference stylesheet "style.css" that is stored in ./css directory

app.get('/', function(req, res) { //on html request of root directory, run callback function
    res.sendFile(path.join(__dirname, '/index.html')); //send html file named "helloworld.html"
});
app.get('schedule.html', function(req, res) { //on html request of root directory, run callback function
    res.sendFile(path.join(__dirname, '/schedule.html')); //send html file named "helloworld.html"
});
app.get('teamlogin.html', function(req, res) { //on html request of root directory, run callback function
    res.sendFile(path.join(__dirname, '/teamlogin.html')); //send html file named "helloworld.html"
});
app.get('index.html', function(req, res) { //on html request of root directory, run callback function
    res.sendFile(path.join(__dirname, '/index.html')); //send html file named "helloworld.html"
});

app.listen(port);//listen for network traffic on port specified by port variable

console.log("Now listening on port " + port); //write to the console which port is being used