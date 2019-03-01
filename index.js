const express = require("express")

const server = require("./server")

const PORT = 8080

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
