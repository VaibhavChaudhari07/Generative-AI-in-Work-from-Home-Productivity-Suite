const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  workHours: { start: Number, end: Number },
  preferences: { type: Object, default: {} },
});
module.exports = mongoose.model("User", UserSchema);
