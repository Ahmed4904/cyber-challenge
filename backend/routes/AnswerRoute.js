import express from "express"
import {
    getAnswers,
    getAnswerById,
    createAnswer,
    updateAnswerById,
    deleteAnswerById
} from "../controllers/Answer.js"
import { verifyUser, adminOnly } from "../middleware/AuthUser.js"

const router = express.Router()
 
router.get('/answers', verifyUser, adminOnly, getAnswers)
router.get('/answers', verifyUser, adminOnly, deleteAnswerById)
router.get('/answers', verifyUser, adminOnly, createAnswer)
router.get('/answers', verifyUser, adminOnly, updateAnswerById)
router.get('/answers', verifyUser, adminOnly, getAnswerById)

export default router