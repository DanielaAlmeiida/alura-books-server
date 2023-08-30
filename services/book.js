const fs = require("fs")

function getAllBooks() {
    return JSON.parse(fs.readFileSync("books.json"))
}

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const filteredBook = books.filter(book => book.id === id)[0]
    return filteredBook
}

function insertBook(newBook) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const newBookList = [...books, newBook]

    fs.writeFileSync("books.json", JSON.stringify(newBookList))
}

function modifyBook(modifications, id){
    let books = JSON.parse(fs.readFileSync("books.json"))
    const modifiedIndex = books.findIndex( book => book.id === id )

    const modifiedContent = {...books[modifiedIndex], ...modifications}
    //books[modifiedIndex] --> {id: "2", name="Cool book"}
    //modifications --> {name= "Nice book"}

    books[modifiedIndex] = modifiedContent

    fs.writeFileSync("books.json", JSON.stringify(books))
}

function deleteBookById(id){
    const books = JSON.parse(fs.readFileSync("books.json"))

    const filteredBooks = books.filter(book => book.id !== id)

    fs.writeFileSync("books.json", JSON.stringify(filteredBooks))
}
module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    modifyBook, 
    deleteBookById
}