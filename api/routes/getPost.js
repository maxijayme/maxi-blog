import { Router } from 'express';
const router = Router();
import db from '../db/db.js';
import { QueryTypes } from 'sequelize';

router.get('/', async (req,res)=>{
    try{
        const posts = await db.query(`Select * from posts `, { type: QueryTypes.SELECT });
        res.status(200).json(posts);
    }
    catch(err){
        res.status(500).send(err)
    }
})

router.get('/:id', async (req,res)=>{
    try{
        const {id} = req.params;
        const post = await db.query(`Select * from posts where id = "${id}" `, { type: QueryTypes.SELECT });
        res.status(200).json(post);
    }
    catch(err){
        res.status(500).send(err)
    }
})

export default router;