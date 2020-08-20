// dependencies
require('dotenv');
const express = require('express');
const packageData = require('../package');

// settings
const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.APP_PORT || 3000;
const HOST = 'localhost';

// cloud run
const commitHash = process.env.COMMIT_HASH || 'not set';
const GC_revision = process.env.K_REVISION || 'not set';
const GC_service = process.env.K_SERVICE || 'not set';
const GC_project = process.env.K_PROJECT || 'not set';
const GC_region = process.env.K_REGION || 'not set';
const cloudURL = `https://console.cloud.google.com/run/detail/${GC_region}/${GC_service}/revisions&project=${GC_project}`;

// app
const app = express();
app.get('/', (req, res) => {

    let response = `
    <h1>Hello World</h1>
    <h2>data:</h2>
    <ul>
        <li>Package version: <strong>${packageData.version}</strong></li>
        <li>Commit hash: <strong>${commitHash}</strong></li>
        <li>Google Cloud revision id: <a href="${cloudURL}" target="_blank"><strong>${GC_revision}</strong></a></li>
        <li>Node ENV: <strong>${NODE_ENV}</strong></li>
    </ul>
    `;

    res.send(response);
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});