//routes/questions.js

import express from 'express';
import { postQuestion, getQuestions } from '../controller/questionsController.js';

const router = express.Router();

// Mock data for demonstration purposes
router.post('/questions', postQuestion);
router.get('/questions', getQuestions);

export default router;



