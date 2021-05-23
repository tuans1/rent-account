const Account = require('../models/Account')
const RentHistory = require('../models/RentHistory')
const Game = require('../models/Game')
class AccountController {
    index(req, res, next) {
        Account.find({}).sort({ "acc": 1, "isRent": -1})
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
        try {
            const acc = Account.findById(req.body.id);
            console.log(acc);
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Error EDIT',
            })
        }
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
                        game: "GTA",
                        time: rentalTime.time,
                        userId: req.body.userId,
                    })
                    res.send({ success: "success" });
                }
            })
            res.send({ success: "success" });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Error RENT',
            })
        }
    }


}
module.exports = new AccountController;