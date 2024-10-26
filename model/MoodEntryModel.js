const mongoose = require("mongoose");

const MoodEntrySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  moodLevel: { type: Number, min: 1, max: 5, required: true },
  focusLevel: { type: Number, min: 1, max: 5, required: true },
  energyLevel: { type: Number, min: 1, max: 5, required: true },
  note: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("MoodEntry", MoodEntrySchema);
