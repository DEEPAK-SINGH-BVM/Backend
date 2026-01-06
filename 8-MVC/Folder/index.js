const express = require("express");
const db = require("./config/db");
const router = require("./routes/userRoutes");
const app = express()
app.use(express.json())

app.use('/',router)

app.listen(7050,async ()=>{
    await db()
    console.log('Server Start Successfully 7050!!');
})