const Bot = require('../models/Bot');

class RequesterController {
    async first(req, res) {
        const { _groupId } = req.params;
        const bot = await Bot.findOneAndUpdate({ _groupId, active: true },{}).sort([['updatedAt', 1]]);
        return res.json({ bot });
    }
}

module.exports = new RequesterController();