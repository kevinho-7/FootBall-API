const express = require("express");
const app = express();
const createError = require("http-errors");
const errMiddle = require("./middlewares/error");
const corsConfigs = require("./config/corsConfig");
const bodyParser = require("body-parser");
const session = require("express-session");
const passportConfig = require("./config/passport");


// Port
const Port = process.env.PORT | 8080;

// Data Base
require("./db/db");

// Body parser
app.use(bodyParser.json());

// Setting session and passport
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
}));

app.use(passportConfig.passportIni);
app.use(passportConfig.passportSes);

// Cors configuration Middleware
app.use(corsConfigs);

// GitHub Strategy
passportConfig.GitHubPass;

// Serialize and Deserialize User
passportConfig.passSerialize;
passportConfig.passDeserialize;

// Routes Requirements
const indexRoute = require("./routes/index");
const playersRoute = require("./routes/players");
const teamsRoute = require("./routes/teams");
const matchRoute = require("./routes/matches");
const statsRoute = require("./routes/stats");
const loginRoute = require("./routes/login");
const logoutRoute = require("./routes/logout");
const authRoute = require("./routes/auth");
const swaggerRoute = require("./routes/swagger");

// App Routes
app.use("/", indexRoute);
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);
app.use("/players", playersRoute);
app.use("/teams", teamsRoute);
app.use("/matches", matchRoute);
app.use("/stats", statsRoute);
app.use("/api-docs", swaggerRoute);

// Authentication Route
app.use("/", authRoute);

// Launch localhost
app.listen(Port, console.log(`runnig at localhost:${Port}`))

// Route (page) not found
app.use(errMiddle.routeErrHandle);

// Global Error middleware
app.use(errMiddle.globalErrMiddleware);