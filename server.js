var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use(function(request, response) {
  response.status(404).sendfile(__dirname + '/public/404.html');
})

app.listen(app.get('port'), function() {
  console.log('Node app is running at localhost: ' + app.get('port'));
});
