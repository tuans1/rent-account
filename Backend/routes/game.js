const express = require('express')
const router = express.Router()
var multer = require('multer');
var upload = multer();
const GameController = require('../app/controllers/GameController')

router.get('/',GameController.index)
router.post('/create',GameController.create)
router.delete('/delete',GameController.delete)
router.post('/upload',GameController.uploadGame)
// router.post('/changePassword',GameController.changePassword)


module.exports = router