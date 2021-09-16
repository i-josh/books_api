import express from 'express'
import { getBooks,addBook,getBook,updateBook} from '../controllers/booksController.js'

const router = express.Router()

router.get('/',getBooks)
router.post('/', addBook)
router.get('/:id',getBook)
router.patch('/:id',updateBook)

export default router