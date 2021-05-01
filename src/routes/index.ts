import { Router } from 'express';
import settingsRouter from './settings.routes';

const routes = Router();

routes.use('/settings', settingsRouter);

export default routes;
