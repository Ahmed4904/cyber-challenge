import express from "express"
import {
    getQuestions
} from "../controllers/Question.js"
import { verifyUser, adminOnly } from "../middleware/AuthUser.js"

const router = express.Router()
 
router.get('/questions', verifyUser, adminOnly, getQuestions)

export default router