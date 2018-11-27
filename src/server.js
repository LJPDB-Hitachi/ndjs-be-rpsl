"use strict";
exports.__esModule = true;
var express = require("express");
var Server = /** @class */ (function () {
    function Server() {
        this.express = express();
        //this.express.use(bodyParser.urlencoded({ extended: true }));
        //this.express.use(bodyParser.json());
        //this.express.use(express.static(__dirname+"/front"))
        this.allRoutes();
    }
    Server.prototype.allRoutes = function () {
        var router = express.Router();
        router.get('/', function (req, res) {
            res.json({
                message: 'TS Test...'
            });
        });
        this.express.use('/', router);
    };
    return Server;
}());
exports["default"] = new Server().express;
