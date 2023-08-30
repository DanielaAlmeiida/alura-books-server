const express = require("express")
const bookRoute = require("./Routes/book")

const app = express()

const port = 8000

app.use(express.json())
app.use('/books', bookRoute)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})