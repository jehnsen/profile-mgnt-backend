import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import userProfileRoute from './routes/userProfileRoute';
import { connectDB } from './config/database';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// initialize the mongodb instance
connectDB();

app.use('/api/v1/users', userProfileRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
