import express from 'express'
import { getBooks, addBook, getBook, updateBook } from '../controllers/booksController.js'

const router = express.Router()

//get all books
router.get('/', getBooks)
//add a new book
router.post('/', addBook)
//get book by id
router.get('/:id', getBook)
//update book
router.patch('/:id', updateBook)

export default router