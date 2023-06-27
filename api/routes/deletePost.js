import { Router } from 'express';
const router = Router();
import db from '../db/db.js';
import { QueryTypes } from 'sequelize';

router.delete('/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const deletePost = await db.query (`DELETE FROM entries WHERE id=${id}`, { type: QueryTypes.DELETE })
        res.status(200).json({msj:'success deleted'}) 
    }
    catch(err){
        res.status(500).send(err)
    }
})

export default router;