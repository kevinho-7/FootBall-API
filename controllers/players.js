const playersModel = require("../models/players");
const teamsModel = require("../models/teams");
const createError = require("http-errors");
const {playerAddedMsg, playerUpdateMsg, playerDelMsg} = require("../utils/message");

// Get players controllers
const getAllPlayers = async (req, res, next) => {
    //#swagger.tags=['players']
    try{
        const players = await playersModel.find().populate("club", "club_name");

        res.status(200).json(players);
    } catch(err){
        return next(err);
    }
};

const getPlayerById = async (req, res, next) => {
    //#swagger.tags=['players']
    try{
        const playerId = req.params.id;
        const player = await playersModel.findById(playerId).populate("club", "club_name");

        if(!player){
            return next(createError(404, "Player not found."));
        }

        res.status(200).json(player);
    } catch(err){
        next(err);
    }
};

// Post players controllers
const addPlater = async (req, res, next) => {
    //#swagger.tags=['players']
    const playerInfo = {
        name: req.body.name,
        age: req.body.age,
        nationality: req.body.nationality,
        position: req.body.position,
        club: req.body.club,
        career_goals: req.body.career_goals,
        height: req.body.height,
        dominant_foot: req.body.dominant_foot,
        image: req.body.image
    }

    try{
        const findClub = await teamsModel.findOne({club_name: playerInfo.club});
        if(!findClub){
            next(createError(404, "Club not found in data base."));
        }
        
        playerInfo.club = findClub._id;
        const player = await playersModel.create(playerInfo);

        res.json({
            message: playerAddedMsg(playerInfo.name)
        });

    } catch(err){
        next(err);
    }
};

// Put players controllers
const updatePlayer = async (req, res, next) => {
    //#swagger.tags=['players']
    const playerInfo = {
        name: req.body.name,
        age: req.body.age,
        nationality: req.body.nationality,
        position: req.body.position,
        club: req.body.club,
        career_goals: req.body.career_goals,
        height: req.body.height,
        dominant_foot: req.body.dominant_foot,
        image: req.body.image
    }

    try{
        const playerId = req.params.id;
        const findPlayerId = await playersModel.findById(playerId);
        if (!findPlayerId){
            return next(createError(404, "Player not found in data base."));
        }

        const findClub = await teamsModel.findOne({club_name: playerInfo.club});
        if(!findClub){
            return next(createError(404, "Club not found in data base"));
        }

        playerInfo.club = findClub._id;
        const player = await playersModel.findByIdAndUpdate(playerId, playerInfo);

        res.json({
            message: playerUpdateMsg(playerInfo.name)
        });

    } catch(err){
        next(err);
    }
};

// Delete players controllers
const deletePLayer = async (req, res, next) => {
    //#swagger.tags=['players']
    try{
        const playerId = req.params.id;
        const playerName = await playersModel.findById(playerId)
        
        if(!playerName){
            return next(createError(400, "Invalid ID"));
        }

        const player = await playersModel.findByIdAndDelete(playerId);

        res.json({
            message: playerDelMsg(playerName.name)
        })
    } catch(err){
        next(err);
    }
};

module.exports = {
    getAllPlayers,
    getPlayerById,
    addPlater,
    updatePlayer,
    deletePLayer
}
