'use strict';

console.log("server started")

// start mongo
let mongo = require('./mongo');
mongo.start()

const express = require('express');
const {StatusController} = require("./controller/status_controller");
const {ExplainController} = require("./controller/explain_controller");

// Constants
const PORT = 31011;
const HOST = '0.0.0.0';

// App
const app = express();

function registerApi() {
    app.get('/', (req, res) => {
        res.send('Hello World');
    });
    const statusController = new StatusController()
    app.get('/server-stats', statusController.serverStatus)
    const explainController = new ExplainController();
    app.post('/databases/{database}/explain', explainController.explain)
}

// register api
registerApi();

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
