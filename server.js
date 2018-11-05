
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Item = require('./api/models/datamovement_model'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
/*mongoose.Promise = global.Promise;
mongoose.connect('mongodb://user:Qwerty01@ds052978.mlab.com:52978/node-test', {useNewUrlParser:true}, (err)=>{
    console.log("MongoDB conn error > ",err);
});
*/ 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname+"/front"))


var routes = require('./api/routes/dataMovement_status_route'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
