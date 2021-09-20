import Books from '../models/books.js'

export async function getBooks(req, res) {
    try {
        const books = await Books.find()
        if (books) {
            return res.status(200).json({
                "status": "success",
                "total_books": books.length,
                "data": books
            })
        } else {
            return res.status(400).json(
                {
                    "status": "error",
                }
            )
        }
    } catch (e) {
        res.json({
            "error": e
        })
    }
}

export async function addBook(req, res) {
    try {    

        const book = new Book(req.body)
        const savedBook = await book.save()

        if (savedBook) {
            return res.status(200).json({
                "status": "success",
                "data": savedBook
            })
        }
    } catch (e) {
        res.status(400).json({
            "error": e
        })
    }
}

export async function getBook(req, res) {
    try {
        const book = await Books.findById(req.params.id)
        if (book) {
            return res.status(200).json({
                "status": "success",
                "data": book
            })
        } else {
            return res.status(400).json({
                "status": "error",
                "message": "could not find the book you are looking for"
            })
        }

    } catch (e) {
        res.status(400).json({
            "error": e
        })
    }
}

export async function updateBook(req, res) {
    try {
        const book = await Books.findByIdAndUpdate(req.params.id, req.body)
        return res.json({
            "status": "status",
            "data": book
        })

    } catch (e) {
        res.json({
            "error": e
        })
    }
}