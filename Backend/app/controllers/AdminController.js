const Admin = require('../models/Admin')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
var nodemailer = require('nodemailer');

class AdminController {
    index(req, res, next) {
        Admin.find({ id: req.params.id })
            .then(acc => res.send(acc))
    }
    async register(req, res, next) {
        try {
            const { email } = req.body;
            const admin = await Admin.findOne({ email })
            if (admin) {
                res.status(403).send({ duplicate: "Email đã được đăng ký" });
            } else {
                const admin = new Admin();
                const token = await jwt.sign({ _id: admin._id }, 'lemon')
                admin.password = req.body.password
                admin.email = req.body.email
                admin.token = token
                admin.money = 0;
                admin.id = Math.floor(Date.now() / 1000).toString().slice(4);
                admin.role = "user"
                await admin.save()
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'l.anhtuan1006@gmail.com',
                        pass: 'taobingu'
                    }
                });

                var mailOptions = {
                    from: "Thuê Acc <l.anhtuan1006@gmail.com>",
                    to: req.body.email,
                    subject: 'Xác nhận Email THUÊ ACC',
                    text: 'Truy cập LINK để xác minh tài khoản : http://localhost:3000/dang-ky/' + admin.token
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                res.status(200).send({ message: "Success" });
            }
        } catch (error) {
            console.log(error)
            res.status(400).send({ error: "Error" })
        }
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
    async login(req, res, next) {
        try {
            const { password, email } = req.body;
            const admin = await Admin.findOne({ email })
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
        const { id, accessToken, email } = req.body;
        const admin = await Admin.findOne({ id })
        if (admin) {
            res.status(200).send(admin);
        } else {
            const admin = new Admin();
            admin.id = Math.floor(Date.now() / 1000).toString().slice(4);
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