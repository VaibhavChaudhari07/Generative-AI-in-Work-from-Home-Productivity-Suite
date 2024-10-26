const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  // Get the token from the Authorization header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Token should be sent as "Bearer <token>"

  if (!token)
    return res
      .status(401)
      .json({ message: "Access Denied: No Token Provided" });

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err)
      return res.status(403).json({ message: "Access Denied: Invalid Token" });

    // Token is valid; add user data to request object
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
