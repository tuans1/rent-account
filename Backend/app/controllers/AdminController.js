const Admin = require('../models/Admin')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

const TransactionHistory = require('../models/TransactionHistory')
class AdminController {
    index(req, res, next) {
        Admin.find({ id: req.params.id })
            .then(acc => res.send(acc))
    }
 
    async checkMoney(req, res) {
        const admin = await Admin.findOne({ id: req.body.userId })
        const rentalTime = JSON.parse(req.body.rentalTime);
        if (parseInt(admin.money) < parseInt(rentalTime.price)) {
            res.status(403).send({ error: "Số tiền không đủ để thuê Acc. Vui lòng nạp thêm !" })
        } else {
            res.status(200).send({ message: "Thuê Acc thành công !" })
        }
    }
    async payment(req, res, next) {
        try {
            const admin = await Admin.findOne({ id: req.body.userId })
            admin.money = parseInt(admin.money) + 50000;
            await admin.save();
            await TransactionHistory.create({
                value: 50000,
                userId: req.body.userId,
                code: req.body.code,
                status: true,
            })
            res.status(200).send({ admin })
        } catch (error) {

        }
    }

    async changePassword(req, res, next) {
        try {
            const { oldPW, confirmPW1, confirmPW2, token } = req.body

            const admin = await Admin.findOne({ token })
            if (confirmPW1 !== confirmPW2) {
                res.status(400).send({ error: "Mật khẩu không khớp" })
            }
            const isPasswordMatch = await bcrypt.compare(oldPW, admin.password)
            if (!isPasswordMatch) {
                res.status(400).send({ error: "Mật khẩu cũ không đúng" })
            }
            const newToken = await jwt.sign({ _id: admin._id }, 'lemon')
            admin.token = newToken
            admin.password = confirmPW1
            admin.save()
            res.send({ newToken })
        } catch (error) {
            res.status(400).send(error)
        }
    }

}
module.exports = new AdminController;