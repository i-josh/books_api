import express from 'express'
import { createUser, getUsers, loginUser } from '../controllers/usersController.js'

const router = express.Router()

//create a new user
router.post('/create', createUser)
//login a user
router.post('/login', loginUser)
//get all users
router.get('/', getUsers)

export default router