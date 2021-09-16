import bcrypt from 'bcrypt'
import User from '../models/users.js'

export async function createUser(req, res) {
    try {
        const { username, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)

        const checkEmail = await User.findOne({ email: email })

        if (checkEmail) {
            return res.json({
                "status": "error",
                "message": "email already exists!"
            })
        }

        const user = new User({
            username: username,
            email: email,
            password: hashedPassword
        })

        const savedUser = await user.save()

        if (savedUser) {
            res.json(user)
        } else {
            res.status(400).json({
                "status": "error",
                "message": ""
            })
        }


    } catch (error) {
        res.status(400).json({
            "message": error
        })
    }
}

export async function loginUser(req, res) {
    try {

    } catch (error) {
        res.status(400).json({
            "message": error
        })
    }
}

export async function getUsers(req, res) {
    try {
        const users = await User.find()
        if (users) {
            return res.status(200).json({
                "status": "success",
                "total_users": users.length,
                "data": users
            })
        } else {
            return res.status(400).json(
                {
                    "status": "error",
                }
            )
        }
    } catch (error) {
        res.status(400).json({
            "message": error
        })
    }
}