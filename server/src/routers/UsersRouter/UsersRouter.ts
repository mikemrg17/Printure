
import { NextFunction, Request, Response, Router } from 'express';
import Users from '../../controllers/Users';
import jwt from 'jsonwebtoken';
import config from '../../config/config'
import extractJWT from '../../middleware/extractJWT';

//NAMESPACED is a constant which contains the name of the module
const NAMESPACE = "User"

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
    this._router.get('/validate', extractJWT , (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json(this._controller.validate());
    });

    //Register new user
    this._router.post('/register', (req: Request, res: Response, next: NextFunction) => {
      let { username, password } = req.body
      let flag = this._controller.register(username, password)
      //Here we print the hashError, to do that we have to return it from register function above
      if(flag){
        res.status(500).json({
          message: "Error" 
        })
      }
      res.status(200).json();
    });

    //Log In
    this._router.post('/logIn', (req: Request, res: Response, next: NextFunction) => {
      let { username, password } = req.body
      let flag =  this._controller.logIn(username, password)
      if(flag === 0){
        const payload = {
          check: true
        }
        const token = jwt.sign(payload, config.key, { expiresIn: 1440 })
        res.status(200).json({
          message: 'Authorized',
          token: token
        });
      }else{
        res.status(500).json({
          message: 'Unauthorized'
        });
      }
      
    });

    //Get all users
    this._router.get('/getAll', extractJWT , (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json(this._controller.defaultMethod());
    });

  }

  

}

export = new UsersRouter().router;
