'use strict';
module.exports = function(app) {
  var dataMovementList = require('../controllers/dataMovement_controller');

  // dataMovementList Routes
  app.route('/allItems')
    .get(dataMovementList.list_all_items)
    .post(dataMovementList.create_a_item);


  app.route('/items/:itemId')
    .get(dataMovementList.read_a_item)
    .put(dataMovementList.update_a_item);
};