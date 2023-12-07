import express from "express"
import {
    getUserResponses
} from "../controllers/UserResponse.js"
import { verifyUser, adminOnly } from "../middleware/AuthUser.js"

const router = express.Router()
 
router.get('/userresponses', verifyUser, adminOnly, getUserResponses)

export default router