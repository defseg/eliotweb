import express from "express"
import path from "path"

import { client } from './db'
import { wrapAsync } from './utils'

const app = express()
const port = 3000

app.get('/dynamicContent', (req, res) => {
    res.send(`Hi! I'm some dynamic content! You loaded this page at millisecond ${new Date().getTime()} of the UNIX 年号.`)
})

app.get('/all_words', wrapAsync(async (req, res) => {
    console.log(client)
    const words = await client.query('SELECT * FROM words_diacritics')
    console.log('>>>', words)
    res.json(words.rows)
    res.end()
}))

// Default error handling middleware is fine for now

// https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

