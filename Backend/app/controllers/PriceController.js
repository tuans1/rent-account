const Price = require('../models/Price')

class PriceController {

    async create(req, res) {
        try {
            const formData = req.body;
            const price = new Price(formData);
            await price.save();
            res.status(200).send({ message: "success" });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Error Create',
            })
        }
    }

    async delete(req, res) {
        try {
            await Price.findOne({ _id: req.body.id }).deleteOne().exec();
            res.status(200).send({ message: "success" });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Error DELETE',
            })
        }
    }
}
module.exports = new PriceController;