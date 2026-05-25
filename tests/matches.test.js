const { test, expect } = require("@jest/globals");
const mockingoose = require("mockingoose");
const matches =  require("../models/matches");
const matchesController = require("../controllers/matches");

// Simulate req, res
function mockRes(){
    const res = {}
    res.status = code => {res.statusCode = code; return res};
    res.json = data => {res.body = data; return res};
    return res;
};

// Get all matches
test("Testing /GET from matches", async() => {
  const testMatch = {
        team_a: "",
        team_b: "",
        date: "",
        local: "",
        competition: "",
        score: "",
    };
    
    mockingoose(matches).toReturn(testMatch, "find");

    const req = {};
    const res = mockRes();

    await matchesController.getAllMatches(req, res);

    expect(res.statusCode).toBe(200);
});


// Get By ID test
test("Testing /GET by his ID route from matches", async () => {
    const matchId = "69373be0afac5e83337a4627";
    const testMatch = {
        _id: matchId,
        team_a: "Remo",
        team_b: "Liverpool FC",
        date: "10/08/2024",
        local: "Santiago Bernabeu",
        competition: "I dont know",
        score: "4-0",
    };

    mockingoose(matches).toReturn(testMatch, "findOne");

    const req = {params: {id: matchId}};
    const res = mockRes();

    await matchesController.getMatchesById(req, res);

    expect(res.statusCode).toBe(200);
});