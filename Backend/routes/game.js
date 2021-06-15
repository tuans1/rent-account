const express = require('express')
const router = express.Router()
const GameController = require('../app/controllers/GameController')

router.post('/create',GameController.create)
router.delete('/delete',GameController.delete)
router.post('/upload',GameController.uploadGame)
// router.post('/changePassword',GameController.changePassword)


module.exports = router