const setRateLimit = require("express-rate-limit");

// Rate limit middleware
const rateLimitMiddleware = setRateLimit({
  windowMs: 2 * 60 * 10000,
  max: 3,
  message: "You have exceeded your 3 requests per 20 minute limit.",
  headers: true,
});

module.exports = rateLimitMiddleware;