import { Router } from 'express';
const router = Router();
import db from '../db/db.js';
import { QueryTypes } from 'sequelize';

router.patch('/', async (req,res)=>{
    try{
        const {id, title, image, paragraph} = req.body;
        const updatePost = await db.query(`Update entries set title="${title}", image= "${image}", entry_content ="${paragraph}" where id = "${id}"`,{type: QueryTypes.UPDATE})
        if(updatePost.length>1){
            res.status(200).send({msj:"success updated"});
        }
    } catch(err){
        res.status(500).send(err)
    }
})

export default router;