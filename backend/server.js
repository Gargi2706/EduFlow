


const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());


// app.get("/", (req, res) => {
//   res.send("EduFlow API Running");
// });

const authRoutes = require('./routes/authRoutes');

app.use('/api/auth', authRoutes);

const courseRoutes = require("./routes/courseRoutes");

app.use("/api/courses", courseRoutes);

const lessonRoutes = require("./routes/lessonRoutes");

app.use("/api/courses/:courseId/lessons", lessonRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});