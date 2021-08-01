
import { NextFunction, Request, Response, Router } from 'express';
import Users from '../../controllers/Users';

class UsersRouter {
  private _router = Router();
  private _controller = Users;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching controller endpoints.
   */
  private _configure() {
    //Validate user
    this._router.get('/validate', (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json({
        message: 'User authorized'
      });
    });

    //Register new user
    this._router.post('/register', (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json(this._controller.defaultMethod());
    });

    //Log In
    this._router.post('/logIn', (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json(this._controller.defaultMethod());
    });

    //Get all users
    this._router.get('/getAll', (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json(this._controller.defaultMethod());
    });

  }

  

}

export = new UsersRouter().router;
