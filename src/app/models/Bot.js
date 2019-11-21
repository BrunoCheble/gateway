const mongoose = require('mongoose');

const BotSchema = new mongoose.Schema(
    {
        url: String,
        type: String,
        active: { 
            type: Boolean, 
            default: true 
        },
        _groupId: mongoose.Schema.Types.ObjectId,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Bot', BotSchema);
