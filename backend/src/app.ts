import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import sectionsRouter from './routes/section.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/fullstack-homepage')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/sections', sectionsRouter);

export default app;