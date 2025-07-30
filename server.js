import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRouter from './Routes/user.js';
import contactRouter from './Routes/contact.js';
import { config } from 'dotenv';
const app = express();

// Middleware
app.use(bodyParser.json());

// .env setup
config({ path: '.env' });

// Routes
app.use('/api/user', userRouter);
app.use('/api/contact', contactRouter);

// Default Route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Port
const port = process.env.PORT || 5000;

// MongoDB Connection + Server Start
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "NodeJs_Mastery_Course",
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");

    app.listen(port, () => {
      console.log(`🚀 Server is running on port: ${port}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
