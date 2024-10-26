const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

// Protected routes for message management
router.post("/", messageController.createMessage);
router.get("/", messageController.getMessages);

module.exports = router;
