const MoodEntry = require("../model/MoodEntryModel");

// Log a new mood entry
exports.createMoodEntry = async (req, res) => {
  try {
    const moodEntry = new MoodEntry({ ...req.body, userId: req.user.id });
    const savedEntry = await moodEntry.save();
    res.status(201).json(savedEntry);
  } catch (error) {
    res.status(500).json({ message: "Error logging mood entry" });
  }
};

// Retrieve all mood entries for a user
exports.getMoodEntries = async (req, res) => {
  try {
    const moodEntries = await MoodEntry.find({ userId: req.user.id });
    res.json(moodEntries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching mood entries" });
  }
};
