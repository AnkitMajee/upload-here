import express from 'express';
import { test } from '../controllers/user.controller.js'; //add .js for node projects

const router =express.Router();

router.get('/test',test);

export default router;
