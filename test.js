const fs = require("fs")

const currentlyData = JSON.parse(fs.readFileSync("books.json"))
const newData = {id: '3', name: 'Livro bacana'}

fs.writeFileSync("books.json", JSON.stringify([...currentlyData, newData]))

console.log(currentlyData)