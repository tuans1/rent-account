const express = require('express')
const router = express.Router()
const AccountController = require('../app/controllers/AccountController')
const isAuth = require('../middleware/request')

router.post('/search', isAuth, AccountController.search)
router.post('/create', isAuth, AccountController.create)
router.put('/edit', isAuth, AccountController.edit)
router.delete('/delete', isAuth, AccountController.delete)
router.post('/rent', isAuth, AccountController.rent)

module.exports = router