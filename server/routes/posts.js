import express from 'express';

import { createPosts, getPosts } from '../controllers/posts';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPosts);



export default router;
