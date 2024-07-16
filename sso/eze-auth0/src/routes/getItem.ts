import { Router, Request, Response } from 'express';
import {fetchGroupItems} from '../services/getItems'

const getItemRouter = Router();

getItemRouter.get('/:groupId', async (req: Request, res: Response) => {
    const groupId = parseInt(req.params.groupId, 10);
  
    try {
      const items = await fetchGroupItems(groupId);
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: `Error fetching items from group ${groupId}` });
    }
  });

  export default getItemRouter;