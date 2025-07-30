import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRouter from './Routes/user.js'
import contactRouter from './Routes/contact.js'
import {config} from 'dotenv'
const app = express();


// Middleware
app.use(bodyParser.json());


//.env setup

config({path:'.env'})




// ==============================
// User Routes
// ==============================
app.use('/api/user',userRouter
);


// ==============================
// Contact Routes
// ==============================

app.use('/api/contact',contactRouter);






// Default Route
app.get("/", (req, res) => {
  res.send("Hello World");
});


// ==============================
// MongoDB Connection
// ==============================
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "NodeJs_Mastery_Course",
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));


  const port= process.env.PORT

// ==============================
// Server Start
// ==============================
app.listen(port, () => {
  console.log(`🚀 Server is running on port: ${port}`);
});
