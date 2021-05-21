const express = require('express')
const router = express.Router()

const TransactionHistoryController = require('../app/controllers/TransactionHistoryController')

router.get('/', TransactionHistoryController.index)
router.post('/create', TransactionHistoryController.create)


module.exports = router