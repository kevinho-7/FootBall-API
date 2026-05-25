const Joi = require("@hapi/joi");

// Schema to validate players 
const playerSchema = Joi.object({
   name: Joi.string().max(25).required(),
   age: Joi.number().min(8).max(100).required(),
   nationality: Joi.string().max(20).required(),
   position: Joi.string().max(20).required(),
   club: Joi.string().max(15).required(),
   career_goals: Joi.number().max(1000).required(),
   height: Joi.number().min(1.40).max(2.50).required(),
   dominant_foot: Joi.string().min(4).max(5).required(),
   image: Joi.string().uri().required()
});

// Schema to validate teams
const teamsSchema = Joi.object({
    club_name: Joi.string().max(15).required(),
    country: Joi.string().max(25).required(),
    city: Joi.string().max(30).required(),
    foundation_year: Joi.number().min(1863).required(),
    stadium_name: Joi.string().max(35).min(4).required(),
    team_badge: Joi.string().uri().required()
});

// Schema to validate matches
const matchesSchema = Joi.object({
    team_a: Joi.string().required(),
    team_b: Joi.string().required(),
    date: Joi.string().required(),
    local: Joi.string().required(),
    competition: Joi.string().required(),
    score: Joi.string().required()
});

// Schema to validate stats
const statsSchema = Joi.object({
    player: Joi.string().required(),
    match: Joi.string().required(),
    minutes_played: Joi.number().required(),
    shots: Joi.number().required(),
    assists: Joi.number().required(),
    accurate_passes: Joi.number().required(),
    yellow_cards: Joi.number().required(),
    red_cards: Joi.number().required(),
    rating: Joi.number().required(),
    record_date: Joi.string().required()
});


module.exports = {
    playerSchema,
    teamsSchema,
    matchesSchema,
    statsSchema
}

