const express = require('express')
const router = express.Router()

const PriceController = require('../app/controllers/PriceController')

router.get('/',PriceController.index)
router.post('/create',PriceController.create)
router.delete('/delete',PriceController.delete)

module.exports = router