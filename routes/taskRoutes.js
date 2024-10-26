const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Protected routes for task management
router.post("/", taskController.createTask);
router.get("/", taskController.getTasks);
router.patch("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
