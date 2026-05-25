const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const createError = require("http-errors");

// Data Base URL
const dataBaseUrl = process.env.DB_URL

mongoose.connect(dataBaseUrl);

mongoose.connection.on("connected", () => {
    console.log("Data Base has been connected")
});

mongoose.connection.on("err", (err, req, res, next) => {
    return next(createError(500, "Cannot connect in the data base."))
});

module.exports = mongoose;