'use strict';

var express = require('express');
var stormpath = require('express-stormpath');
var path = require('path');

var app = express();
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

/*app.use(stormpath.init(app, {
  apiKeyFile: 'stormpath/apiKey.properties',
  application: 'https://api.stormpath.com/v1/applications/34htzbGkSrufxeZkgjV1ur',
  secretKey: 'ultra_secret_shed_time_key',
  enableForgotPassword: true
}));*/

app.get('/', function(req, res) {
  res.status(200).sendFile(path.join(__dirname, 'public/', 'index.html'));
});

app.get('/piano.html', function(req, res) {
  res.status(200).sendFile(path.join(__dirname, 'public/', 'piano.html'));
});

app.get('/drums.html', function(req, res) {
  res.status(200).sendFile(path.join(__dirname, 'public/', 'drums.html'));
});

app.get('/*', function(req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public/', '404.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running at localhost: ' + app.get('port'));
});
