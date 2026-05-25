const matchesModel = require("../models/matches");
const teamsModel = require("../models/teams");
const createError = require("http-errors");
const {matchAddedMsg, matchUpdatedMsg} = require("../utils/message");

// Get all matches controller
const getAllMatches = async (req, res, next) => {
    //#swagger.tags=['matches']
    try{
        const matches = await matchesModel.find().populate("team_a team_b", "club_name");

        res.status(200).json(matches);
    } catch(err){
        return next(err);
    }
};

// Get match by ID controller
const getMatchesById = async (req, res, next) => {
    //#swagger.tags=['matches']
    try {
        const matchId = req.params.id;
        const match = await matchesModel.findById(matchId).populate("team_a team_b", "club_name");

        if(!match){
            return next(createError(404, "Match not found."));
        }

        res.status(200).json(match);

    } catch(err){
        return next(err);
    }
};

// Post match controller
const addMatch = async (req, res, next) => {
    //#swagger.tags=['matches']
    const matchInfo = {
        team_a: req.body.team_a,
        team_b: req.body.team_b,
        date: req.body.date,
        local: req.body.local,
        competition: req.body.competition,
        score: req.body.score
    }

    try{
        const findTeamA = await teamsModel.findOne({club_name: matchInfo.team_a});
        const findTeamB = await teamsModel.findOne({club_name: matchInfo.team_b});

        if(!findTeamA || !findTeamB){
            return next(createError(404, "Team A or Team B not found in data base."))
        }

        matchInfo.team_a = findTeamA._id;
        matchInfo.team_b = findTeamB._id;

        const match = await matchesModel.create(matchInfo);

        res.json({
            message: matchAddedMsg(findTeamA.club_name, findTeamB.club_name)
        });

    } catch(err){
        return next(err)
    }
};

// Put match controller
const updateMatch = async (req, res, next) => {
    //#swagger.tags=['matches']
    const matchInfo = {
            team_a: req.body.team_a,
            team_b: req.body.team_b,
            date: req.body.date,
            local: req.body.local,
            competition: req.body.competition,
            score: req.body.score
    }

    try{
        const matchId = req.params.id;
        const findMatchrId = await matchesModel.findById(matchId);
        if(!findMatchrId){
            return next(createError(400, "Invalid ID."));
        }

        const teamA = await teamsModel.findOne({club_name: matchInfo.team_a});
        const teamB = await teamsModel.findOne({club_name: matchInfo.team_b});

        if(!teamA || !teamB){
            return next(createError(404, "Team A or B not found"));
        }

        matchInfo.team_a = teamA._id;
        matchInfo.team_b = teamB._id;
        const updateMatch = await matchesModel.findByIdAndUpdate(matchId, matchInfo);
        
        res.json({
            message: matchUpdatedMsg(teamA.club_name, teamB.club_name)
        });
    } catch(err){
        next(err);
    }
};

// Delete match controller
const deleteMatch = async (req, res, next) => {
    //#swagger.tags=['matches']
    try{
        const matchId = req.params.id;
        const findMatch = await matchesModel.findById(matchId);
        if(!findMatch){
            return next(createError(404, "Match not found."));
        }

        const delMatch = await matchesModel.findByIdAndDelete(matchId);

        res.json({
            message: "This Match has been deleted."
        });
    } catch(err){
        next(err);
    }
};

module.exports = {
    getAllMatches,
    getMatchesById,
    addMatch,
    updateMatch,
    deleteMatch
};