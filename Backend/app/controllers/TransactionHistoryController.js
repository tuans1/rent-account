const TransactionHistory = require('../models/TransactionHistory')

class TransactionHistoryController {

    index(req, res, next) {
        TransactionHistory.find(req.query.userId ? { userId: req.query.userId } : {}).sort({createAt: -1}).then(transaction => res.send(transaction))
    }

}
module.exports = new TransactionHistoryController;