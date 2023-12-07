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
router.get('/user/:id', verifyUser, adminOnly, getUserById)
//router.get('/users/email/:email', getUserByEmail)
router.post('/user', createUser)
router.patch('/user/:id', verifyUser, adminOnly, updateUser)
router.delete('/user/:id', verifyUser, adminOnly, deleteUser)

export default router