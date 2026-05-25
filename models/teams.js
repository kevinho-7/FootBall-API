const mongoose = require("../db/db");

const teamsSchema = new mongoose.Schema(
    {
        //club_name: {type: String, unique: true},
        club_name: String,
        country: String,
        city: String,
        foundation_year: Number,
        stadium_name: String,
        team_badge: String
    },
    {
        collation: "teams",
        versionKey: false
    }
);

module.exports = mongoose.model("teams", teamsSchema);