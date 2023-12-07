import express from "express"
import {Login, logOut, me} from "../controllers/Auth.js"

const router = express.Router()
 
router.get('/me', me)
router.post('/login', Login)
router.delete('/logout', logOut)

export default router