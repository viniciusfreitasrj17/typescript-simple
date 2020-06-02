import { Router }  from 'express';
import { index, create } from './controllers/UserController';

const routes = Router();

routes.get('/users', index);
routes.post('/users', create);

export default routes;
