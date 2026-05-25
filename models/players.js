const mongoose = require("../db/db");

const playerSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        nationality: String,
        position: String,
        club: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "teams"
        },
        career_goals: Number,
        height: Number,
        dominant_foot: String,
        image: String
    },
    {
        collection: "players",
        versionKey: false
    }
);

module.exports = mongoose.model("players", playerSchema);