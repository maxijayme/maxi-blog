import { Router } from 'express';
const router = Router();
import db from '../db/db.js';
import { QueryTypes } from 'sequelize';
import multer from 'multer';
import fs from 'fs';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now().toString()
        cb(null, `${file.originalname.split('.')[0]}-${uniqueSuffix}.${file.mimetype.split('/')[1]}`);
    },
  });
  
  const saveImage = multer({ storage });


router.patch('/',saveImage.single('image'), async (req,res)=>{
    try{
        const {id,title,paragraph, prevImage} = req.body;
        const image = req.file?.path.replace(/\\/g, '/').replace("public/","");
        let updatePost;
        if(prevImage){
            const filePath = `public/${prevImage}`
            fs.unlink(filePath, async (err) => {
                if (err) {
                console.error(err);
                }
            });
        }
        if(image){
            updatePost = await db.query(`Update posts set title="${title}", image= ("${image}"), entry_content ="${paragraph}" where id = "${id}"`,{type: QueryTypes.UPDATE})
        }
        else {
            updatePost = await db.query(`Update posts set title="${title}", entry_content ="${paragraph}" where id = "${id}"`,{type: QueryTypes.UPDATE})
        }
        if(updatePost.length>1){
            res.status(200).send({msj:"success updated"});
        }
    } catch(err){
        res.status(500).send(err)
    }
})

export default router;