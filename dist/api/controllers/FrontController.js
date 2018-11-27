"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FrontController {
    testLA(req, res) {
        res.status(200).send({
            message: "GET request successful!!"
        });
    }
}
exports.FrontController = FrontController;
exports.frontController = new FrontController();
//# sourceMappingURL=FrontController.js.map