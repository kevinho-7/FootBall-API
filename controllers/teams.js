const teamsModel = require("../models/teams");
const {teamAddedMsg, teamUpdateMsg, teamDelMsg} = require("../utils/message");
const createError = require("http-errors");


// Get teams controller
const getAllTeams = async (req, res, next) => {
    //#swagger.tags=['teams']
    try{
        const teams = await teamsModel.find();

        res.status(200).json(teams);
        
    } catch(err){
        next(err);
    }
};

const getTeamById = async (req, res, next) => {
    //#swagger.tags=['teams']
    const teamId = req.params.id;
    try{
        const team = await teamsModel.findById(teamId);

        if(!team){
            return next(createError(404, "Team not found."));
        }

        res.status(200).json(team);
    } catch(err){
        next(err);
    }
};

// Post teams controller
const createTeam = async (req, res, next) => {
    //#swagger.tags=['teams']
    const teamInfo = {
        club_name: req.body.club_name,
        country: req.body.country,
        city: req.body.city,
        foundation_year: req.body.foundation_year,
        stadium_name: req.body.stadium_name,
        team_badge: req.body.team_badge
    }

    try{
        const teamsName = await teamsModel.findOne({club_name: teamInfo.club_name});
        if (teamsName){
            return next(createError(400, "This team already exists"));
        };

        const postTeam = await teamsModel.create(teamInfo);
        res.json({
            message: teamAddedMsg(teamInfo.club_name)
        });
    } catch(err){
        next(err);
    }
};

// Put teams controller
const updateTeam = async (req, res, next) => {
    //#swagger.tags=['teams']
    const teamInfo = {
        club_name: req.body.club_name,
        country: req.body.country,
        city: req.body.city,
        foundation_year: req.body.foundation_year,
        stadium_name: req.body.stadium_name,
        team_badge: req.body.team_badge
    }

    const teamId = req.params.id;

    try{
        const findTeamId = await teamsModel.findById(teamId)
        if(!findTeamId){
            return next(createError(404, "Invalid ID"));
        }

        const team = await teamsModel.findByIdAndUpdate(teamId, teamInfo);
        
        res.json({
            message: teamUpdateMsg(teamInfo.club_name)
        })
    } catch(err){
        next(err);
    }
};

// Delete teams controller
const deleteTeam = async (req, res, next) => {
    //#swagger.tags=['teams']
    try{
        const teamId = req.params.id;
        const findTeamId = await teamsModel.findById(teamId)

        if(!findTeamId){
            return next(createError(404, "Invalid ID"));
        }

        const team = await teamsModel.findByIdAndDelete(teamId);

        res.json({
            message: teamDelMsg(findTeamId.club_name)
        })
    } catch(err) {
        next(err);
    }
};

module.exports = {
    getAllTeams,
    getTeamById,
    createTeam,
    updateTeam,
    deleteTeam
}