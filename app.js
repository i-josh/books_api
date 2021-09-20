import express from 'express'
import booksRoute from './routes/booksRoute.js'
import usersRoute from './routes/userRoutes.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.once(
    'open', () => {
        console.log("connected to mongo db")
    })

//routes
app.use("/api/v1/books", booksRoute)
app.use("/api/v1/users", usersRoute)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})