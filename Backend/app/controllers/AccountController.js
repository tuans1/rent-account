const Account = require('../models/Account')
const RentHistory = require('../models/RentHistory')
const Game = require('../models/Game')
const Admin = require('../models/Admin')
class AccountController {
    index(req, res, next) {
        Account.find({}).sort({ "isRent": 1, "acc": 1 })
            .then(acc => res.send(acc))
    }
    search(req, res) {
        console.log(req.body)
        // Account.find({}).sort({ "acc": 1 })
        //     .then(acc => res.send(acc))
    }
    async create(req, res, next) {
        const formData = req.body;
        await Game.find({ _id: formData.game }).then(game => {

            const account = new Account(formData);
            account.acc = game[0].name + " " + Math.floor(Math.random() * Math.floor(9999));
            account.image = game[0].image;
            account.isActive = true;
            account.save()
            res.status(200).send({ message: "success" });
        })
    }

    edit(req, res) {
        Account.findByIdAndUpdate(req.body.id, { acc: req.body.acc, name: req.body.name, password: req.body.password, isRent: false, isActive: true }, (err, result) => {
            if (err) {
                return res.status(500).send({ error: "unsuccessful" })
            } else {
                res.send({ success: "success" });
            }
        })
    }
    delete(req, res) {
        try {
            Account.findOne({ _id: req.body.id }).deleteOne().exec();
            res.status(200).send({ message: "success" });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Error DELETE',
            })
        }
    }
    async rent(req, res) {
        try {
            const rentalTime = JSON.parse(req.body.rentalTime);
            await Account.findByIdAndUpdate(req.body.accId, { rentalTime: rentalTime.time, isRent: true, isActive: false, updateAt: new Date() }, (err, result) => {
                if (err) {
                    return res
                        .status(500)
                        .send({ error: "unsuccessful" })
                } else {
                    RentHistory.create({
                        acc: result.acc,
                        name: result.name,
                        password: result.password,
                        time: rentalTime.time,
                        userId: req.body.userId,
                    })
                }
            })
            const admin = await Admin.findOne({ id: req.body.userId })
            admin.money -= rentalTime.price;
            admin.save();
            res.status(200).send(admin)
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Error RENT',
            })
        }
    }


}
module.exports = new AccountController;