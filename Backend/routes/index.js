const express = require('express')
const account = require('./account')
const admin = require('./admin')
const game = require('./game')
const rentHistory = require('./rentHistory')
const price = require('./price')
const transactionHistory = require('./transactionHistory')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const Admin = require('../app/models/Admin')
const Account = require('../app/models/Account')
const Price = require('../app/models/Price')
const Game = require('../app/models/Game')
var nodemailer = require('nodemailer');

function route(app) {

    app.use('/register', async function (req, res) {
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
                admin.id = Math.floor(Date.now() / 1000);
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
                    subject: 'Xác minh tài khoản THUÊ ACC',
                    text: 'Truy cập LINK để tiếp tục : http://localhost:3000/dang-ky/' + admin.token
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
    })

    app.use('/login', async function (req, res, next) {
        try {
            const { password, email } = req.body;
            const admin = await Admin.findOne({ email })
            if (!admin) {
                throw new Error({ error: 'Không tìm thấy tài khoản' })
            }
            const isPasswordMatch = await bcrypt.compare(password, admin.password)
            if (!isPasswordMatch) {
                res.status(404).send({ error: "Mật khẩu không hợp lệ" })
            }
            const token = await jwt.sign({ _id: admin._id }, 'lemon')
            admin.token = token
            admin.save()
            res.send({ admin })
        } catch (error) {
            res.status(500).send(error)
        }
    });

    app.use('/login-fb', async function (req, res, next) {
        const { id, accessToken, email } = req.body;
        const admin = await Admin.findOne({ id })
        if (admin) {
            res.status(200).send(admin);
        } else {
            const admin = new Admin();
            admin.id = id;
            admin.email = email;
            admin.password = "password";
            admin.token = await jwt.sign({ _id: admin._id }, 'lemon');
            admin.role = "user";
            admin.money = 0;
            await admin.save();
            res.status(200).send(admin);

        }
    });

    app.use('/account', function (req, res, next) {
        let perPage = 4; // số lượng sản phẩm xuất hiện trên 1 page
        let page = req.query.page || 1;
        let game = req.query.game || "";
        let active = req.query.active;
        if (active) {
            Account.find({ isActive: active })
                .then(acc => {
                    // console.log(acc)
                    res.send(acc)
                })
        } else if (game !== "") {
            Account.find({ acc: { $regex: game } }).sort({ "isRent": 1, "acc": 1 })
                .then(acc => {
                    // console.log(acc)
                    res.send(acc)
                })
        }
        else {
            Account.find({ acc: { $regex: game } }).skip((perPage * page) - perPage).limit(perPage).sort({ "isRent": 1, "acc": 1 })
                .then(acc => {
                    // console.log(acc)
                    res.send(acc)
                })
        }
    });
    app.use('/price', function (req, res, next) {
        Price.find({}).then(price => res.send(price))
    });
    app.use('/game', function (req, res, next) {
        Game.find({}).sort({ "name": 1 }).then(game => res.send(game))
    });

    app.use(function (req, res, next) {
        const tokenFromClient = req.body.token || req.query.token || req.headers["x-access-token"];
        if (tokenFromClient) {
            // Nếu tồn tại token
            try {
                // Thực hiện giải mã token xem có hợp lệ hay không?
                const token = jwt.verify(tokenFromClient, 'lemon');
                next();
            } catch (error) {
                // Nếu giải mã gặp lỗi: Không đúng, hết hạn...etc:
                // Lưu ý trong dự án thực tế hãy bỏ dòng debug bên dưới, mình để đây để debug lỗi cho các bạn xem thôi
                return res.status(401).json({
                    message: 'Unauthorized.',
                });
            }
        }
    })

    app.use('/account', account)
    app.use('/admin', admin)
    app.use('/game', game)
    app.use('/rent-history', rentHistory)
    app.use('/price', price)
    app.use('/transaction-history', transactionHistory)
}

module.exports = route;