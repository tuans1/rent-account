const express = require('express')
const router = express.Router()
const AdminController = require('../app/controllers/AdminController')

router.get('/:id', AdminController.index)
router.post('/register', AdminController.register)
router.post('/payment', AdminController.payment
)
router.post('/login-fb', AdminController.loginFacebook)
router.post('/check-money', AdminController.checkMoney)
router.post('/changePassword', AdminController.changePassword)
// router.post('/store',courseController.store)
// router.get('/:slug',courseController.index)

module.exports = router