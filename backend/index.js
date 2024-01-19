
import {getWords} from './wordeditor.js';
const express = require("express");
const app = express();


app.get("/", (req, res) => {
    let words = getWords();
    for (let i = 0; i < words.length; i++) {
        console.log(words[i]);
    }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});