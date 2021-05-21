const express = require('express')
const router = express.Router()

const RentHistoryController = require('../app/controllers/RentHistoryController')

router.get('/',RentHistoryController.index)
router.post('/create',RentHistoryController.create)


module.exports = router