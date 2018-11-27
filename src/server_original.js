
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Item = require('./api/models/datamovement_model'), //created model loading here
  bodyParser = require('body-parser');
  
var http = require('http').Server(app)
var io = require('socket.io')(http)
app.set('io',io)
// mongoose instance connection url connection
/*mongoose.Promise = global.Promise;
mongoose.connect('mongodb://user:Qwerty01@ds052978.mlab.com:52978/node-test', {useNewUrlParser:true}, (err)=>{
    console.log("MongoDB conn error > ",err);
});
*/ 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname+"/front"))


var routes = require('./api/routes/dataMovement_status_route')(app); //importing route
var logicapp_routes = require('./api/logicapp-bl/data-tagging/routes/la_dataTagging_routes')(app); //importing route
//routes(app); //register the route


http.listen(port);

io.on('connection',(socket)=>{
  console.log('IO Socket: USER connected...!')
})

console.log('todo list RESTful API server started on: ' + port);

function letFrontAware(){
  io.emit('dsdsdsds')
}