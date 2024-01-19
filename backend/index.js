const express = require("express");
const app = express();
const { Pool } = require("pg");
const port = process.env.PORT || 3000;

// The secret connection string you copied earlier
const dbURL = process.env.DATABASE_URL;

const pool = new Pool({
    dbURL,
});

const wordEditor = require("./wordeditor");

app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', dbURL);
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

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});