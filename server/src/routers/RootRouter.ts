import { Router } from 'express';
import ItemsRouter from './ItemsRouter/ItemsRouter';
import UsersRouter from './UsersRouter/UsersRouter';

class RootRouter {
  private _router = Router();
  private _subrouterA = ItemsRouter;
  private _subrouterB = UsersRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use('/Items', this._subrouterA);
    this._router.use('/Users', this._subrouterB);
  }
}

export = new RootRouter().router;
