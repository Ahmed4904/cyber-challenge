import express from "express"
import {
    getUserResponses,
    getUserResponseById,
    createUserResponse,
    updateUserResponseById,
    deleteUserResponseById,
} from "../controllers/UserResponse.js"
import { verifyUser, adminOnly } from "../middleware/AuthUser.js"

const router = express.Router()
 
router.get('/userresponses', verifyUser, adminOnly, getUserResponses)
router.get('/userresponses', verifyUser, adminOnly, createUserResponse)
router.get('/userresponses', verifyUser, adminOnly, getUserResponseById)
router.get('/userresponses', verifyUser, adminOnly, updateUserResponseById)
router.get('/userresponses', verifyUser, adminOnly, deleteUserResponseById)

export default router