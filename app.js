import express from 'express'
import booksRoute from './routes/booksRoute.js'
import usersRoute from './routes/userRoutes.js'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())

const dbPath = "mongodb+srv://admin:admin123456@cluster0.o2ehj.mongodb.net/app_database?retryWrites=true&w=majority"

mongoose.connect(dbPath, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.once(
    'open', () => {
        console.log("connected to mongo db")
    })

//routes
app.use("/api/v1/books", booksRoute)
app.use("/api/v1/users", usersRoute)

app.listen(3000, () => {
    console.log("listening on port 3000")
})