'use strict';
exports => function (app) {
    var dataMovementList = require('../controllers/dataMovement_controller');
    // dataMovementList Routes
    app.route('/allItems')
        .get(dataMovementList.list_all_items)
        .post(dataMovementList.create_item_table);
    app.route('/items/:itemId')
        .get(dataMovementList.read_a_item)
        .put(dataMovementList.update_an_item);
};
//# sourceMappingURL=dataMovement_status_route.js.map