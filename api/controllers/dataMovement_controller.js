'use strict';

// Try not to use MLAB but directly azure cosmos DB to store file and status. Front will be filled just with info passed from Azure Functions

//var mongoose = require('mongoose'),
  //Item = mongoose.model('DataMovementSchema');

exports.list_all_items = function(req, res) {
 /* Item.find({}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
  */
 res.json([{"filename":"43kd34.zip", "status":"uploading", "address":"10.24.23.01"},{"filename":"43kd34.zip", "status":"uploading", "address":"10.24.23.01"}]);
};




exports.create_item_table = function(req, res) {
/*  var new_item = new Item(req.body);
  new_item.save(function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
  */
  //req.json([{"filename":"43kd34.zip", "status":"uploading", "address":"10.24.23.01"},{"filename":"43kd34.zip", "status":"uploading", "address":"10.24.23.01"}]);
  console.log("getting the info..."+JSON.stringify(req));
  res.json({"status":"OK"})
};


exports.read_a_item = function(req, res) {
  /*Item.findById(req.params.itemId, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
  */
};


exports.update_an_item = function(req, res) {
  /*Item.findOneAndUpdate({_id: req.params.itemId}, req.body, {new: true}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
  */
};


  