const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema({
    __id: String,
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