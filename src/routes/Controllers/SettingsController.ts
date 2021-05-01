import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import SettingsRepository from '../../repositories/SettingsRepository';

class SettingController {
  async create(req: Request, res: Response) {
    const { username, chat } = req.body;

    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = settingsRepository.create({
      username,
      chat,
    });

    await settingsRepository.save(settings);

    return res.status(201).json(settings);
  }
}

export default new SettingController();
