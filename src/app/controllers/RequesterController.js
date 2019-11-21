const Bot = require('../models/Bot');
const axios = require('axios');

class RequesterController {
    async first(req, res) {
        const { _groupId } = req.params;
        const bot = await Bot.findOneAndUpdate({ _groupId, active: true }, {}).sort([['updatedAt', 1]]);

        axios({
            method: bot.type,
            url: bot.url,
            data: req.body
        }).then(function (response) {
            console.log(response);
        });

        return res.json({ ...bot, data: req.body });
    }
}

module.exports = new RequesterController();