const mongoose = require("../db/db");

const matchesSchema = new mongoose.Schema(
    {
        team_a: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "teams"
        },
        team_b: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "teams"
        },
        date: String,
        local: String,
        competition: String,
        score: String
    },
    {
        collection: "matches",
        versionKey: false
    }
);

module.exports = mongoose.model("matches", matchesSchema);