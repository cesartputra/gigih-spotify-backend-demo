
const express = require('express')
const { 
    getAllSongs,
    addSong,
    getSong
} = require('../controllers/mainController')
const router = express.Router()

router.get('/songs', getAllSongs)
router.post('/songs', addSong)
router.get('/songs/:id', getSong)

module.exports = router;
