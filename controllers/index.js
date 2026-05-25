
const sendIndex = (req, res, next) => {
    //#swagger.tags=['Welcome to FootBall Scouts API']
    res.send(`
        <section>
            <div>
                <h1>Welcome to FootBall Scouts API</h1>
                <h2>${req.session.user ? `Welcome ${req.session.user.displayName}!!` : " "}</h2>
            </div>

            <div>
                <h2>Use one of this links bellow to see some of our API</h2>
            </div>
            
            <div>
                <p><a href="/api-docs">Api Docs here</p>
                <ul>
                    <li><a href="/players">Players Route</li>
                    <li><a href="/teams">Teams Route</li>
                    <li><a href="/matches">Matches</li>
                    <li><a href="/stats">Stats</li>
                </ul>
            <div>
        </section>
    `)
};

module.exports = {
    sendIndex
}