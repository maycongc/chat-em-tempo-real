import { Router } from 'express';
import settingController from './Controllers/SettingsController';

const routes = Router();

routes.post('/', settingController.create);

export default routes;
