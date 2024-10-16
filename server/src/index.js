

//index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import questionRoutes from './routes/questions.js';


// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Mock data for demonstration purposes
app.use('/api',questionRoutes);


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




