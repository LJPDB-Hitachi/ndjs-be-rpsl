"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const io = require("socket.io");
//import * as http from "http";
const MainRoutes_1 = require("./api/routes/MainRoutes");
const FrontRoutes_1 = require("./api/routes/FrontRoutes");
class App {
    // public http: http.Server;
    constructor() {
        this.app = express();
        //this.http.addListener(event:"listen", listener:(this.app));
        this.config();
    }
    config() {
        // support for comunication with frontE
        this.app.set("io", io);
        // support application/json
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: true }));
        //this.app.use(express.static(__dirname+"/front"));  
        // Routing
        // Routing
        this.app.use("/", MainRoutes_1.mainRoutes);
        this.app.use("/frontR", FrontRoutes_1.frontRoutes);
    }
}
//test
exports.default = new App().app;
//# sourceMappingURL=app.js.map