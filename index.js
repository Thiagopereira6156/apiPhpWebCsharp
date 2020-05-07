//import to express
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  response.send('Thiago pereira');
});
 // a porta que o node ira se expor
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});