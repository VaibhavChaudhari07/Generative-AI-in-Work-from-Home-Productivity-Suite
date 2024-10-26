const Message = require("../model/MessageModel");

// Save a new message
exports.createMessage = async (req, res) => {
  try {
    const message = new Message({ ...req.body, userId: req.user.id });
    const savedMessage = await message.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).json({ message: "Error saving message" });
  }
};

// Retrieve prioritized messages for a user
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ userId: req.user.id }).sort({
      urgency: -1,
      createdAt: -1,
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages" });
  }
};
