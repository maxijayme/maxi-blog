import { Router } from 'express';
const router = Router();
import db from '../db/db.js';
import { QueryTypes } from 'sequelize';
import multer from 'multer';

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


router.post('/',saveImage.single('image'), async (req,res)=>{
    try{
        const {title,paragraph} = req.body;
        const image = req.file.path.replace(/\\/g, '/').replace("public/","");
        const newPost = await db.query(`Insert into posts (title, image, entry_content) values ("${title}", "${image}", "${paragraph}")`,{type: QueryTypes.INSERT })
        if(newPost.length>1){
            res.status(200).json(newPost);
        }
    } catch(err){
        res.status(500).send(err)
    }
})

export default router;