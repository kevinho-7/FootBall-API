const { test, expect } = require("@jest/globals");
const mockingoose = require("mockingoose");
const stats =  require("../models/stats");
const statsController = require("../controllers/stats");

// Simulate req, res
function mockRes(){
    const res = {}
    res.status = code => {res.statusCode = code; return res};
    res.json = data => {res.body = data; return res};
    return res;
};

// Get all players
test("Testing /GET from stats", async() => {
  const testStats = {
        player: "",
        match: "",
        minutes_played: "",
        assists: "",
        accurate_passes: "",
        yellow_cards: "",
        red_cards: "",
        rating: "",
        record_date: ""
    };
    
    mockingoose(stats).toReturn(testStats, "find");

    const req = {};
    const res = mockRes();

    await statsController.getAllStats(req, res);

    expect(res.statusCode).toBe(200);
});


// Get By ID test
test("Testing /GET by his ID route from stats", async () => {
    const statsId = "69378a1fcf85bc68ac3737b4";
    const testStats = {
        _id: statsId,
        player: "Rodrigo Garro",
        match: "Corinthians x Real Madrid",
        minutes_played: 90,
        shots: 15,
        assists: 4,
        accurate_passes: 40,
        yellow_cards: 0,
        red_cards: 0,
        rating: 9,
        record_date: "10/09/2025"
    };

    mockingoose(stats).toReturn(testStats, "findOne");

    const req = {params: {id: statsId}};
    const res = mockRes();

    await statsController.getStatById(req, res)

    expect(res.statusCode).toBe(200);
});