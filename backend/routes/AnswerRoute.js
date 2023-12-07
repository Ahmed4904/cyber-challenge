import express from "express"
import {
    getAnswers
} from "../controllers/Answer.js"
import { verifyUser, adminOnly } from "../middleware/AuthUser.js"

const router = express.Router()
 
router.get('/answers', verifyUser, adminOnly, getAnswers)

export default router