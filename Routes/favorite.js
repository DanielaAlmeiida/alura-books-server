const { Router } = require("express")
const { getFavorites, deleteFavorite, postFavorite } = require("../Controlers/favorite")

const router = Router()

router.get('/', getFavorites)

router.post('/:id', postFavorite)

router.delete('/:id', deleteFavorite)

module.exports = router