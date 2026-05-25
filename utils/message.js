
// EndPoints Messages to the user about PLAYERS
const playerAddedMsg = (name) => {
    const message = `${name} has been added.`
    return message;
};

const playerUpdateMsg = (name) => {
    const message = `${name} has been updated.`
    return message;
};

const playerDelMsg = (name) => {
    const message = `${name} has been deleted.`
    return message;
}

// EndPoints Messages to the user about TEAMS
const teamAddedMsg = (name) => {
    const message = `${name} has been created.`
    return message;
};

const teamUpdateMsg = (name) => {
    const message = `${name} has been updated.`
    return message;
};

const teamDelMsg = (name) => {
    const message = `${name} has been deleted.`
    return message;
};

// EndPoints Messages to the user about MATCHES
const matchAddedMsg = (teamA, teamB) => {
    const message = `The match ${teamA} x ${teamB} has been added`;
    return message;
};

const matchUpdatedMsg = (teamA, teamB) => {
    const message = `The match ${teamA} x ${teamB} has been updated`;
    return message;
};

// EndPoints Messages to the user about STATS
const statsAddedMsg = (name) => {
    const message = `The Stats about ${name} for this match has been created`;
    return message;
};




module.exports = {
    playerAddedMsg,
    playerUpdateMsg,
    playerDelMsg,
    teamAddedMsg,
    teamUpdateMsg,
    teamDelMsg,
    matchAddedMsg,
    matchUpdatedMsg,
    statsAddedMsg
}