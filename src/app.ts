import * as express from "express";
import * as bodyParser from "body-parser";
import * as io from "socket.io"; 
//import * as http from "http";
import { mainRoutes } from "./api/routes/MainRoutes";
import { frontRoutes } from "./api/routes/FrontRoutes";

class App {
  public app: express.Application;
 // public http: http.Server;

  constructor() {
    this.app = express();
    //this.http.addListener(event:"listen", listener:(this.app));
    this.config();
  }

  private config(): void {
    // support for comunication with frontE
    this.app.set("io",io);
    // support application/json
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: true }));
    //this.app.use(express.static(__dirname+"/front"));  
    // Routing
    // Routing
    this.app.use("/", mainRoutes);
    this.app.use("/frontR", frontRoutes);  
  }
}
//test
export default new App().app;