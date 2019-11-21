const Bot = require('../models/Bot');
const axios = require('axios');

class RequesterController {
    async first(req, res) {
        const { _groupId } = req.params;
        const bot = await Bot.findOneAndUpdate({ _groupId, active: true }, {}).sort([['updatedAt', 1]]);
        const { type, url } = bot._doc;
        
        axios({
            method: type,
            url,
            data: req.headers
        }).then(function (response) {
            console.log(response);
        });

        return res.json({ type, url, data: req.body });
    }
}

module.exports = new RequesterController();