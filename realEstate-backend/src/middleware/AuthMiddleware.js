const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Invalid token ❌" });
    }

    const decoded = jwt.verify(token.split(" ")[1], "secret");

    req.user = decoded;

    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized ❌" });
  }
};

module.exports = validateToken;