const express = require('express');
const app = express();
const port = 4000;
require('express-ws')(app);

app.get('/', (req, res) => {
    res.end('Echo Server | Ali Bahaari | alibahaari.github.io');
});

app.ws('/echo', (ws, req) => {
    ws.on('message', (msg) => {
        ws.send(msg);
    });

    ws.send('Connected, now send me a message to echo it.');
});

app.listen(port, () => {
    console.log('Server ran on port 4000!');
});