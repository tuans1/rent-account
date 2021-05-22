const Account = require('../models/Account')
const RentHistory = require('../models/RentHistory')
const Game = require('../models/Game')
class AccountController {
    index(req, res, next) {
        Account.find({}).sort({ "acc": 1 })
            .then(acc => res.send(acc))
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
            Account.findByIdAndUpdate(req.body.id, req.body, (err, result) => {
                if (err) {
                    return res
                        .status(500)
                        .send({ error: "unsuccessful" })
                };
                res.send({ success: "success" });
            })
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
            // await Account.findByIdAndUpdate(req.body.accId, { rentalTime: req.body.rentalTime, isRent: true, isActive: false, updateAt: new Date() }, (err, result) => {
            //     if (err) {
            //         return res
            //             .status(500)
            //             .send({ error: "unsuccessful" })
            //     } else {
            //         RentHistory.create({
            //             acc: result.acc,
            //             name: result.name,
            //             password: result.password,
            //             game: result.game,
            //             time: req.body.rentalTime,
            //             userId: req.body.userId,
            //         })
            //         res.send({ success: "success" });
            //     }

            // })
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