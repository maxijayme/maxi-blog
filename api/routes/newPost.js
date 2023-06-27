import { Router } from 'express';
const router = Router();
import db from '../db/db.js';
import { QueryTypes } from 'sequelize';

router.post('/', async (req,res)=>{
    try{
        const {title, image, paragraph} = req.body;
        const newPost = await db.query(`Insert into entries (title, image, entry_content) values ("${title}", "${image}", "${paragraph}")`,{type: QueryTypes.INSERT })
        if(newPost.length>1){
            res.status(200).json(newPost);
        }
    } catch(err){
        res.status(500).send(err)
    }
})

export default router;