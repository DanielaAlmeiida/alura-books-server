const { getAllBooks, getBookById, insertBook, modifyBook, deleteBookById } = require("../services/book")

function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const book = getBookById(id)
            res.send(book)
        } else {
            res.status(422)
            res.send("Invalid ID.")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postBook(req, res) {
    try {
        const newBook = req.body 

        if (req.body.name && req.body.id) {
            insertBook(newBook)
            res.status(201)
            res.send("Book insert with sucess.")
        } else {
            res.status(422)
            res.send("Field can NOT be null.")
        }
        
       
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchBook(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const body = req.body

            modifyBook(body, id)
            res.send("Book modified with sucess.")
        } else {
            res.status(422)
            res.send("Invalid ID.")
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteBook(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deleteBookById(id)
            res.send("Book deleted with sucess.")
        } else {
            res.status(422)
            res.send("Invalid ID.")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }



}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}