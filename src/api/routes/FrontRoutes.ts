import * as express from "express";
import { frontController } from "../controllers/FrontController";

class FrontRoutes {
  public router: express.Router = express.Router();

  constructor() {
    this.config();
  }

  private config(): void {
    this.router.get("/testLA/", (req: express.Request, res: express.Response) =>
      frontController.testLA(req, res)
    );
  }
}

export const frontRoutes = new FrontRoutes().router;