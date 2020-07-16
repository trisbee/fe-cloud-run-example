// dependencies
require('dotenv');
const express = require('express');

// const
const PORT = process.env.PORT || 3000;
const HOST = 'localhost';

// app
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});