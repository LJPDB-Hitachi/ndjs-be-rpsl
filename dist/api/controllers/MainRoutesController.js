"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MainController {
    root(req, res) {
        res.status(200).send({
            message: "GET request successful!!"
        });
    }
}
exports.MainController = MainController;
exports.mainController = new MainController();
//# sourceMappingURL=MainRoutesController.js.map