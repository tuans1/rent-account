const express = require('express')
const router = express.Router()

const TransactionHistoryController = require('../app/controllers/TransactionHistoryController')

router.get('/', TransactionHistoryController.index)


module.exports = router