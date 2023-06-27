import { Router } from 'express';
const router = Router();
import getPost from './getPost.js'

router.use('/getpost', getPost)

export default router;