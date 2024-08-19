const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    description: String
})

const Social = mongoose.model("Social", socialSchema);

module.exports = Social;