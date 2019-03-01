const express = require("express")
const postsRouter = require("./posts/posts-router")

const server = express()

server.use("/api/posts", postsRouter)

server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Posts API</h>
    <p>Welcome to the Lambda Posts API</p>
  `)
})

module.exports = server
