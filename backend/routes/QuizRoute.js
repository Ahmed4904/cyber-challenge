import express from "express"
import {
    getQuizzes,
    createQuiz,
    updateQuizById,
    deleteQuizById,
    getQuizById
} from "../controllers/Quiz.js"
import { verifyUser, adminOnly } from "../middleware/AuthUser.js"

const router = express.Router()
 
router.get('/quizzes', verifyUser, adminOnly, getQuizzes)
router.get('/quizzes', verifyUser, adminOnly, createQuiz)
router.get('/quizzes', verifyUser, adminOnly, getQuizById)
router.get('/quizzes', verifyUser, adminOnly, updateQuizById)
router.get('/quizzes', verifyUser, adminOnly, deleteQuizById)

export default router