const port = process.env.PORT || 8080;

const server = require('./__distFolder__/server');

server.app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
});
