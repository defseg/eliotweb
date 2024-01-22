import { Client } from 'pg'

// Definitely change these. Your deployment environment should tell you what to do here.
const CLIENT_PROPS = {
    user: 'postgres',
    password: 'postgres',
    database: 'eliotweb',
    port: 5432
}

export const client = new Client(CLIENT_PROPS)
client.connect() // async, but we don't wait; it'll happen eventually. this is bad
// TODO wrap app init in an async fn so we can get this first

;(async function () {
    console.log('>?>?>')
    const foo = await client.query("SELECT 1")
    console.log('>>>>>', foo)
})()