import { Request, Response } from 'express';
import knex from '../database/connection';

const baseUrl = 'http://localhost:3333';

class ItemsController {
  async index (request: Request, response: Response) {
    const items = await knex('items').select('*');
    const serializedItems = items.map(item => {
      return {
        ...item,
        image_url: `${baseUrl}/uploads/${item.image}`
      };
    });
    return response.json(serializedItems);
  }
}

export default ItemsController;