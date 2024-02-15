const express = require('express')

const {
    getCurvaAPieces,
    saveCurvaAPiece,
    getCurvaAPieceById,
    deleteCurvaAPieceById,
    updatePiece,
    searchPieces
} = require('./../controllers/curvaa')

const router = express.Router()
 

router.get('/', getCurvaAPieces)

router.get('/:_id', getCurvaAPieceById)

router.post('/save', saveCurvaAPiece) 

router.delete('/:_id', deleteCurvaAPieceById)

router.patch('/:_id', updatePiece)

router.get('/search', searchPieces)

module.exports = router