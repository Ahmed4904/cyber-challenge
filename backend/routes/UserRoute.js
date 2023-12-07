import express from "express"
import {
    createUser,
    deleteUser,
    updateUser,
    getUsers,
    getUserById
} from "../controllers/User.js"
import { verifyUser, adminOnly } from "../middleware/AuthUser.js"

const router = express.Router()
 
router.get('/users', verifyUser, adminOnly, getUsers)
router.get('/users/:id', verifyUser, adminOnly, getUserById)
//router.get('/users/email/:email', getUserByEmail)
router.post('/users', verifyUser, adminOnly, createUser)
router.patch('/users/:id', verifyUser, adminOnly, updateUser)
router.delete('/users/:id', verifyUser, adminOnly, deleteUser)

export default router