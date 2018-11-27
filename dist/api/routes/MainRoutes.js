"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const MainRoutesController_1 = require("../controllers/MainRoutesController");
class MainRoutes {
    constructor() {
        this.router = express.Router();
        this.config();
    }
    config() {
        this.router.get("/", (req, res) => MainRoutesController_1.mainController.root(req, res));
    }
}
exports.mainRoutes = new MainRoutes().router;
//# sourceMappingURL=MainRoutes.js.map