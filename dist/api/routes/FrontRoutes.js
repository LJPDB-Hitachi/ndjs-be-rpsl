"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const FrontController_1 = require("../controllers/FrontController");
class FrontRoutes {
    constructor() {
        this.router = express.Router();
        this.config();
    }
    config() {
        this.router.get("/testLA/", (req, res) => FrontController_1.frontController.testLA(req, res));
    }
}
exports.frontRoutes = new FrontRoutes().router;
//# sourceMappingURL=FrontRoutes.js.map