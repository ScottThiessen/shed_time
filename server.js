var express = require('express');
var stormpath = require('express-stormpath');

var app = express();
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use(stormpath.init(app, {
  apiKeyFile: 'stormpath/apiKey.properties',
  application: 'https://api.stormpath.com/v1/applications/34htzbGkSrufxeZkgjV1ur',
  secretKey: 'ultra_secret_shed_time_key',
}));

app.use(function(request, response) {
  response.status(404).sendfile(__dirname + '/public/404.html');
})

app.listen(app.get('port'), function() {
  console.log('Node app is running at localhost: ' + app.get('port'));
});
