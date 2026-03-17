const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const courseRoutes = require("./routes/courseRoutes");
const lessonRoutes = require("./routes/lessonRoutes");

dotenv.config();

const app = express();


connectDB();

app.use(cors());
app.use(express.json());


// app.get("/", (req, res) => {
//   res.send("EduFlow API Running");
// });



app.use('/api/auth', authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/enrollments", enrollmentRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});