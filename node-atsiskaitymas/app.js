const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const app = express()
const mainRouter = require("./router/mainRouter")
const session = require("express-session")
const http = require("http").createServer(app)

require("./modules/sockets")(http)
require("dotenv").config()

mongoose.connect(process.env.MONGO_KEY).then(res => {
    console.log("CONNECTED")
}).catch(e => {
    console.log('ERROR')
})

http.listen(4000)
app.use(express.json())


app.use(cors({
    origin: true, credentials: true, methods: "GET, POST"
}))

app.use(session({
    secret: "6s5d4fs89d4f65", resave: false, saveUninitialized: true
}))

app.use('/', mainRouter)