'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DataMovementSchema = new Schema({
  source: {
    type: String,
    required: 'Please make sure this item has source address-folder from Azure VM'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  destination: {
    type:String,
    required: "Please make sure this item has destination blob folder"
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('DataMovementSchema', DataMovementSchema);