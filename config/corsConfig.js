const cors = require("cors");

const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Z-Key"]
};

module.exports = cors(corsOptions);