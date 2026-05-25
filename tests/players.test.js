const { test, expect } = require("@jest/globals");
const mockingoose = require("mockingoose");
const players =  require("../models/players");
const playersController = require("../controllers/players");

// Simulate req, res
function mockRes(){
    const res = {}
    res.status = code => {res.statusCode = code; return res};
    res.json = data => {res.body = data; return res};
    return res;
};

// Get all players
test("Testing /GET from players", async() => {
  const testPlayer = {
        name: "",
        age: "",
        nationality: "",
        club: "",
        career_goals: "",
        height: "",
        dominant_foot: "",
        image: ""
    };
    
    mockingoose(players).toReturn(testPlayer, "find");

    const req = {};
    const res = mockRes();

    await playersController.getAllPlayers(req, res);

    expect(res.statusCode).toBe(200);
});


// Get By ID test
test("Testing /GET by his ID route from players", async () => {
    const playerId = "69285af09cc88dc1334c6857";
    const testPlayer = {
        _id: playerId,
        name: "Yuri Alberto",
        age: 24,
        nationality: "Brazilian",
        club: "Corinthians",
        career_goals: 200,
        height: 1.75,
        dominant_foot: "Right",
        image: "https://byupathwayworldwideprod-my.sharepoint.com/:i:/g/personal/kferreira_byupathway_edu/IQDBpwDr6oYjSpTdparbsvnbAXOTEcktcpqQwrOuVI8J00c"
    };

    mockingoose(players).toReturn(testPlayer, "findOne");

    const req = {params: {id: playerId}};
    const res = mockRes();

    await playersController.getPlayerById(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Yuri Alberto");
});