const RentHistory = require('../models/RentHistory')

class RentHistoryController {

    index(req, res, next) {
        RentHistory.find({}).then(game => res.send(game))
    }

    async create(req, res) {
        try {
            console.log(req.body)
            console.log(req.files)
            console.log(req.file)
            // const formData = req.body;
            // const game = new Game(formData);
            // await game.save();
            // res.status(200).send({ message: "success" });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Error Create',
            })
        }
    }

    async delete(req, res) {
        try {
            await Game.findOne({ _id: req.body.id }).deleteOne().exec();
            res.status(200).send({ message: "success" });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Error DELETE',
            })
        }
    }

}
module.exports = new RentHistoryController;