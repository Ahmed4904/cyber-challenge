import express from "express"
import {
    getQuizzes
} from "../controllers/Quiz.js"
import { verifyUser, adminOnly } from "../middleware/AuthUser.js"

const router = express.Router()
 
router.get('/quizzes', verifyUser, adminOnly, getQuizzes)

export default router