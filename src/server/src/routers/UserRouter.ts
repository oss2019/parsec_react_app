import { Router } from 'express';
import { UserController } from '../controllers/UserController';

// The file is responsible to process the api requests and call the required middleware, validator and controller in a centralized place

//@Route: /search
//@AUTH not required
//@FUNCTIONS all user related work

class UserRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.getRoutes();
    this.postRoutes();
    this.putRoutes();
    this.deleteRoutes();
  }
  getRoutes(): void {
    // add all get routes here
    this.router.get(
      '/search',  // path of api request
      UserController.getData  // Main business logic of the server that returns the required response.
    );
  }
  postRoutes(): void {
    // add all post routes here
    // this.router.post()
  }
  putRoutes(): void {
    // add all get routes here
    // this.router.put()
  }
  deleteRoutes(): void {
    // add all get routes here
    // this.router.delete()
  }
}
export default new UserRouter().router;
