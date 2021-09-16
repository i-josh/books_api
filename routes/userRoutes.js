import express from 'express'
import { createUser, getUsers, loginUser } from '../controllers/usersController.js'

const router = express.Router()

router.post('/create', createUser)
router.post('/login', loginUser)
router.get('/', getUsers)

export default router