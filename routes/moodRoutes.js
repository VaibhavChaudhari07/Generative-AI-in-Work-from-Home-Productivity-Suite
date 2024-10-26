const express = require("express");
const router = express.Router();
const moodController = require("../controllers/moodController");

// Protected routes for mood logging
router.post("/", moodController.createMoodEntry);
router.get("/", moodController.getMoodEntries);

module.exports = router;
