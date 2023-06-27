import { Router } from 'express';
const router = Router();
import getPost from './getPost.js'
import editPost from './editPost.js'
import deletePost from './deletePost.js'
import newPost from './newPost.js'

router.use('/newpost', newPost)
router.use('/getpost', getPost)
router.use('/updatepost', editPost)
router.use('/deletepost', deletePost)

export default router;