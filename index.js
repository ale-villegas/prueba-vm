const express = require("express")

const server = express()

server.use(express.json())


server.get("/", (req, res) => {
    res.send("Hello Word")
})


server.listen(3001, () => {
    console.log("Server running on port 3001")
})