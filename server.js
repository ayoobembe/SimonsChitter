var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');
var server = require('http').createServer(app);

app.set('view engine', 'ejs');
app.set('layout', 'layout.ejs');
app.use(express.static(__dirname + '/public'));


app.use(expressLayouts);
// app.use(app.router);


app.get('/', function(request, response){
  response.render('index', { title: "Simons's Chitter" });

});

server.listen(3000, function(){
  console.log('Server listening to port 3000');
});

module.exports = server;
