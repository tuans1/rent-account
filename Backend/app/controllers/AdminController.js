const Admin = require('../models/Admin')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');


class AdminController {
    index(req, res, next) {
        Admin.find({ id: req.params.id })
            .then(acc => res.send(acc))
    }
    async create(req, res, next) {
        try {
            const admin = new Admin(req.body);
            const token = await jwt.sign({ _id: admin._id }, 'lemon')
            admin.token = token
            admin.save()
            res.status(200).send({ admin, token })
        } catch (error) {
            res.status(400).send(error)
        }
    }
    async checkMoney(req, res) {
        const admin = await Admin.findOne({ id: req.body.userId })
        const rentalTime = JSON.parse(req.body.rentalTime);
        if (parseInt(admin.money) < parseInt(rentalTime.price)) {
            res.status(403).send({ error: "Số tiền không đủ để thanh toán. Vui lòng nạp thêm !" })
        } else {
            res.status(200).send({ message: "Thuê Acc thành công !" })
        }
    }
    async login(req, res, next) {
        try {
            const { password, name } = req.body;
            const admin = await Admin.findOne({ name })
            if (!admin) {
                throw new Error({ error: 'Không tìm thấy tài khoản' })
            }
            const isPasswordMatch = await bcrypt.compare(password, admin.password)
            if (!isPasswordMatch) {
                res.status(400).send({ error: "Mật khẩu không hợp lệ" })
            }
            const token = await jwt.sign({ _id: admin._id }, 'lemon')
            admin.token = token
            admin.save()
            res.send({ admin })
        } catch (error) {
            res.status(400).send(error)
        }
    }
    async getEmail(req, res, next) {
        try {

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
    async loginFacebook(req, res) {
        const { id, accessToken, name, email } = req.body;
        const admin = await Admin.findOne({ id })
        if (admin) {
            res.status(200).send(admin);
        } else {
            const admin = new Admin();
            admin.id = Math.floor(Date.now() / 1000).toString().slice(4);
            admin.name = name;
            admin.email = email;
            admin.password = "password";
            admin.token = accessToken;
            admin.role = "user";
            admin.money = 0;
            await admin.save();
            res.status(200).send(admin);

        }
    }
}
module.exports = new AdminController;