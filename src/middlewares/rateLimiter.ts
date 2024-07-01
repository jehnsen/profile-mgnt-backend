import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    handler: (req, res) => {
      res.status(429).json({
        error: 'You have been rate limited, please try again later.',
      });
    },
  });

export default rateLimiter;