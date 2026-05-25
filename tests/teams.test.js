const { test, expect } = require("@jest/globals");
const mockingoose = require("mockingoose");
const teams =  require("../models/teams");
const teamsController = require("../controllers/teams");

// Simulate req, res
function mockRes(){
    const res = {}
    res.status = code => {res.statusCode = code; return res};
    res.json = data => {res.body = data; return res};
    return res;
};

// Get all teams 
test("Testing /GET from teams", async() => {
    const testTeams = {
       club_name: "",
       country: "",
       city: "",
       foundation_year: "",
       stadium_name: "",
       team_badge: ""
    };

    mockingoose(teams).toReturn(testTeams, "find");

    const req = {};
    const res = mockRes();

    await teamsController.getAllTeams(req, res);

    expect(res.statusCode).toBe(200);
});

// Get teams by his ID
test("Testing /GET by his ID from teams", async() => {
    const teamID = "692db4d8780c9f15c8173ec9";
    const testTeams = {
        _id: teamID,
        club_name: "Remo",
        country: "Brazil",
        city: "Belem",
        foundation_year: "1905",
        stadium_name: "Estádio Banpará Baenão",
        team_badge: "https://byupathwayworldwideprod-my.sharepoint.com/:i:/g/personal/kferreira_byupathway_edu/IQDa7GMOnfK4Toy0kuuW_8ppAWuUentG7_9-Y38bh7KqMN8"
    };

    mockingoose(teams).toReturn(testTeams, "findOne");

    const req = {params: {id: teamID}};
    const res = mockRes();

    await teamsController.getTeamById(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.body.club_name).toBe("Remo");
});