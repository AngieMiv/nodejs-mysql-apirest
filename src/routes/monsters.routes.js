import { Router } from 'express';
import { createMonster, deleteMonster, getMonster, getMonsters, updateMonster } from '../controllers/monsters.controller.js';

const router = Router();

router.get('/monsters', getMonsters);
router.get('/monsters/:id', getMonster);

router.post('/monsters', createMonster);

router.patch('/monsters/:id', updateMonster);

router.delete('/monsters/:id', deleteMonster);

export default router;