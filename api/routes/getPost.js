import { Router } from 'express';
const router = Router();
import db from '../db/db.js';
import { QueryTypes } from 'sequelize';

router.get('/', async (req,res)=>{
    const posts = await db.query(`Select * from entries `, { type: QueryTypes.SELECT });
    res.status(200).json(posts);
})

export default router;