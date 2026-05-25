const mongoose = require("../db/db");

const statsSchema = new mongoose.Schema(
    {
        player: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "players"
        },
        match: String,
        minutes_played: Number,
        shots: Number,
        assists: Number,
        accurate_passes: Number,
        yellow_cards: Number,
        red_cards: Number,
        rating: Number,
        record_date: String
    },
    {
        collection: "stats",
        versionKey: false
    }
);

module.exports = mongoose.model("stats", statsSchema);