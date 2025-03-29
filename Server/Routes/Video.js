const express = require("express");
const Video = require("../models/Video"); // Import Video model
const router = express.Router();

// Add a new video
router.post("/add-video", async (req, res) => {
  try {
    const { title, url, description } = req.body;
    const newVideo = new Video({ title, url, description });
    await newVideo.save();
    res.status(201).json({ message: "Video added successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all videos
router.get("/videos", async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
