import mongoose from 'mongoose'

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, default: 0 },
    created: { type: Date, default: Date.now() }
})

const Book = mongoose.model('Book', BookSchema)

export default Book