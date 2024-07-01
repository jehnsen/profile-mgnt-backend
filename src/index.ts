import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import xss from 'xss-clean';
import dotenv from 'dotenv';

import { connectDB } from './config/database';
import { errorHandler } from './middlewares/errorHandler';
import userProfileRoute from './routes/userProfileRoute';
import rateLimiter from './middlewares/rateLimiter';

// load env configuration
dotenv.config();
// set the server port
const PORT = process.env.PORT || 3001;
// create server instance
const app = express();

app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(cors());

app.use(errorHandler);

// initialize the mongodb instance
connectDB();

// Apply the rate limiter to userProfileRoute
app.use('/api/v1/users', rateLimiter, userProfileRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
