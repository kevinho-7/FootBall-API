const createError = require("http-errors");

const globalErrMiddleware = (err, req, res, next) => {
    if (err.status){
        return res.status(err.status).json({
            status: err.status,
            message: err.message
        });
    }

    res.status(500).json({
        status: 500,
        message: "Unexpected server error"
    });
};

const routeErrHandle = ((req, res, next) => {
    return next(createError(404, "Page not found."));
});

module.exports = {
    globalErrMiddleware,
    routeErrHandle
}