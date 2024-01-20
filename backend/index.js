const express = require("express");
const cors = require("cors");
const app = express();
const { Pool } = require("pg");
const PORT = process.env.PORT || 3000;

// The secret connection string you copied earlier
const dbURL = process.env.DATABASE_URL;

const pool = new Pool({
    dbURL,
});

const wordEditor = require("./wordeditor.js");

app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000");
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
  });

app.get("/", (req, res) => {
    wordEditor.getWords().then((results) => {
        res.status(200).json(results);
    })
    .catch((error) => {
        res.status(500).json({ error: error.message });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});