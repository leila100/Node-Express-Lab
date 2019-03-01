const express = require("express")
const router = express.Router()

const db = require("../data/db")

router.use(express.json())

router.get("/", async (req, res) => {
  try {
    const posts = await db.find()
    if (posts) {
      res.status(200).json(posts)
    } else {
      res.status(404).json({ message: "Posts not found" })
    }
  } catch (error) {
    // log error to database
    console.log(error)
    res.status(500).json({
      message: "Error retrieving the posts"
    })
  }
})

module.exports = router
