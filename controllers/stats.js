const statsModel = require("../models/stats");
const playersModel = require("../models/players");
const createError = require("http-errors");
const {statsAddedMsg} = require("../utils/message");

// Get all stats controller
const getAllStats = async (req, res, next) => {
  //#swagger.tags=['stats']
  try{
    const stats = await statsModel.find().populate("player", "name");

    res.status(200).json(stats);
  } catch(err) {
    next(err);
  };
};

// Get stat by ID controller
const getStatById = async (req, res, next) => {
    //#swagger.tags=['stats']
    try{
        const statsId = req.params.id;
        const stats = await statsModel.findById(statsId).populate("player", "name");
        if(!stats){
            return next(createError(404, "Stats not found"));
        }

        res.status(200).json(stats);
    } catch(err){
        next(err);
    }
};

// Post stats controller
const createStats = async (req, res, next) => {
    //#swagger.tags=['stats']
    const statsInfo = {
            player: req.body.player,
            match: req.body.match,
            minutes_played: req.body.minutes_played,
            shots: req.body.shots,
            assists: req.body.assists,
            accurate_passes: req.body.accurate_passes,
            yellow_cards: req.body.yellow_cards,
            red_cards: req.body.red_cards,
            rating: req.body.rating,
            record_date: req.body.record_date
    };

    try{
        const findPlayer = await playersModel.findOne({name: statsInfo.player});
        if(!findPlayer){
            return next(createError(404, "Player not found in the data base"));
        }

        statsInfo.player = findPlayer._id;
        const createStats = await statsModel.create(statsInfo);

        res.json({
            message: statsAddedMsg(findPlayer.name)
        });
    } catch(err) {
        next(err);
    }
};

// Put stats controller
const updateStats = async (req, res, next) => {
    //#swagger.tags=['stats']
    const statsInfo = {
            player: req.body.player,
            match: req.body.match,
            minutes_played: req.body.minutes_played,
            shots: req.body.shots,
            assists: req.body.assists,
            accurate_passes: req.body.accurate_passes,
            yellow_cards: req.body.yellow_cards,
            red_cards: req.body.red_cards,
            rating: req.body.rating,
            record_date: req.body.record_date
    };
    try{
        const statsId = req.params.id;
        const findStats = await statsModel.findById(statsId);
        if(!findStats){
            return next(createError(404, "Status not found"));
        }

        const findPlayer = await playersModel.findOne({name: statsInfo.player});
        if(!findPlayer){
            return next(createError(404, "Player not found in data base"));
        }

        statsInfo.player = findPlayer._id;
        const updateStats = await statsModel.findByIdAndUpdate(statsId, statsInfo);

        res.json({
            message: "The stats for this match has been updated"
        });

    } catch(err) {
        next(err);
    }
};

// Delete stats controller
const deleteStats = async (req, res, next) => {
    //#swagger.tags=['stats']
    try{
        const statsId = req.params.id;
        if(!statsId){
            return next(createError(404, "Stats ID not found"));
        }

        const delStats = await statsModel.findByIdAndDelete(statsId);
        if(!delStats){
            return next(createError(404, "Stats not found"))
        }

        res.json({
            message: "This stats has been deleted."
        })
    } catch(err) {
        next(err);
    }
}

module.exports = {
    getAllStats,
    getStatById,
    createStats,
    updateStats,
    deleteStats
}