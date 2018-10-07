const express = require('express');
const port = 5000;
const app = express();
var webpack = require(webpack);

app.listen(port, function()
{
  console.log("Server listening on port " + port + ".... Remember to use nodemon to listening for changes live.");
})

app.use(express.static('client'));

app.get('/', function(req, res){
  res.send("<h1>Hello world</h1>")
})
