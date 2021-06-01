const RentHistory = require('../models/RentHistory')

class RentHistoryController {

    index(req, res, next) {
        RentHistory.find({userId : req.params.id}).sort({createAt: -1}).then(history => res.send(history))
    }

    async create(req, res) {
        
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