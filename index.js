var express = require('express');
var app = express();

app.use(express.static('static'));

app.get('/sayhello', function (req, res) {
  res.send('Hello Express on C9!');
});

app.get('/greet/:name', function(req, res){
  res.send("Hello there, " + req.params.name + ".");
});

var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});