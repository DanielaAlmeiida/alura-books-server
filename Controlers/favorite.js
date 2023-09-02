const { getAllFavorites, insertFavorite, deleteFavoriteById } = require("../services/favorite")


function getFavorites(req, res) {
    try {
        const favorites = getAllFavorites()
        res.send(favorites)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorite(req, res) {
    try {
        const id = req.params.id
        insertFavorite(id)
        res.status(201)
        res.send("Book insert with sucess.")      
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorite(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deleteFavoriteById(id)
            res.send("Favorite deleted with sucess.")
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
    getFavorites,
    postFavorite,
    deleteFavorite
}