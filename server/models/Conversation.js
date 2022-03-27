const mongoose = require("mongoose");

const ConverSchema = new mongoose.Schema(
    {
        betweenUser: [],
        messages: []
    },
    { timestamps: true }

)

module.exports = mongoose.model("Conversation", ConverSchema);