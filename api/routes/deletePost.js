import { Router } from 'express';
const router = Router();
import db from '../db/db.js';
import { QueryTypes } from 'sequelize';
import fs from 'fs';


router.delete('/:id',(req,res)=>{
    try{
        const {id} = req.params;
        const {imagePath} = req.body;
        const filePath = `public/${imagePath}`
        fs.unlink(filePath, async (err) => {
            if (err) {
              console.error(err);
              return res.status(500).send('Error al eliminar la imagen');
            }
            await db.query (`DELETE FROM entries WHERE id=${id}`, { type: QueryTypes.DELETE })
            res.status(200).json({msj:'success deleted'}) 
          });
    }
    catch(err){
        res.status(500).send(err)
    }
})

export default router;