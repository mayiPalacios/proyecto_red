const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors')
const app = express();
const  routes = require('./routes/streamer.router');

app.use(cors())
const http = require('http').createServer(app);
// get body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
    app.use(routes)

http.listen(3000, function () {
    console.log(`Server running at https://localhost:${3000}`)
});
