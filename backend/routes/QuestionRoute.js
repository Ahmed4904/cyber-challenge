import express from "express"
import {
    getQuestions,
    createQuestion,
    getQuestionById,
    updateQuestionById,
    deleteQuestionById
} from "../controllers/Question.js"
import { verifyUser, adminOnly } from "../middleware/AuthUser.js"

const router = express.Router()
 
router.get('/questions', verifyUser, adminOnly, getQuestions)
router.get('/questions', verifyUser, adminOnly, createQuestion)
router.get('/questions', verifyUser, adminOnly, getQuestionById)
router.get('/questions', verifyUser, adminOnly, updateQuestionById)
router.get('/questions', verifyUser, adminOnly, deleteQuestionById)

export default router