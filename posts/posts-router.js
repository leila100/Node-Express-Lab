const express = require("express")
const cors = require("cors")

const router = express.Router()

const db = require("../data/db")

router.use(express.json())
router.use(cors())

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

router.post("/", async (req, res) => {
  const post = req.body
  if (!post.title || !post.contents) {
    res.status(400).json({
      errorMessage: "Please provide title and contents for the post."
    })
  } else {
    try {
      await db.insert(post)
      res.status(201).json(post)
    } catch (error) {
      // log error to database
      console.log(error)
      res.status(500).json({
        error: "There was an error while saving the post to the database"
      })
    }
  }
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  if (isNaN(id)) {
    res.status(400).json({ error: "The id has to be a number" })
  } else {
    const post = await db.findById(id)
    if (post.length === 0) {
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist." })
    } else {
      const newPost = req.body
      if (!newPost.title || !newPost.contents) {
        res.status(400).json({
          errorMessage: "Please provide title and contents for the post."
        })
      } else {
        try {
          await db.update(id, newPost)
          const updatedPost = await db.findById(id)
          res.status(200).json(updatedPost)
        } catch (error) {
          // log error to database
          console.log(error)
          res
            .status(500)
            .json({ error: "The post information could not be modified." })
        }
      }
    }
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  if (isNaN(id)) {
    res.status(400).json({ error: "The id has to be a number" })
  } else {
    const post = await db.findById(id)
    if (post.length === 0) {
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist." })
    } else {
      try {
        await db.remove(id)
        res.status(200).json(post)
      } catch (error) {
        // log error to database
        console.log(error)
        res.status(500).json({ error: "The post could not be removed" })
      }
    }
  }
})

module.exports = router
