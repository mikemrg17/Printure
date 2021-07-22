import { NextFunction, Request, Response, Router } from 'express';
import Items from '../../controllers/Items';

class ItemsRouter {
  private _router = Router();
  private _controller = Items;

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
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json(this._controller.defaultMethod());
    });

    this._router.post('/', (req: Request, res: Response, next: NextFunction)=>{
      const newItem = req.body
      this._controller.addItem(newItem)
      res.status(200).json(this._controller.defaultMethod())      
    })

    this._router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
      const id = parseInt(req.params.id)
      this._controller.deleteItem(id)
      res.status(200).json(this._controller.defaultMethod())
    })

    this._router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
      const id = parseInt(req.params.id)
      const editedItem = req.body
      this._controller.editItem(id,editedItem)
      res.status(200).json(this._controller.defaultMethod())      
    })
  }
}

export = new ItemsRouter().router;
