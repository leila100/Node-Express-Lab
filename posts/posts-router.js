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
    res
      .status(500)
      .json({ error: "The posts information could not be retrieved." })
  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params
  if (isNaN(id)) {
    res.status(400).json({ error: "The id has to be a number" })
  } else {
    try {
      const post = await db.findById(id)
      if (post.length !== 0) {
        res.status(200).json(post)
      } else {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." })
      }
    } catch (error) {
      // log error to database
      console.log(error)
      res
        .status(500)
        .json({ error: "The post information could not be retrieved." })
    }
  }
})

module.exports = router
