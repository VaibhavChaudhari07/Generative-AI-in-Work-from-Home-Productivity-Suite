const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const moodRoutes = require("./routes/moodRoutes");
const messageRoutes = require("./routes/messageRoutes");
const authenticateToken = require("./middlewares/authMiddleware");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/tasks", authenticateToken, taskRoutes);
app.use("/api/mood", authenticateToken, moodRoutes);
app.use("/api/messages", authenticateToken, messageRoutes);
app.use("/api/user", authenticateToken, authRoutes);

app.get("/", (req, res) => {
  res.send(
    "Welcome to the Generative AI Work-from-Home Productivity Suite API"
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
