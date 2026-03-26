const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const courseRoutes = require("./routes/courseRoutes");
const adminRoutes = require("./routes/adminRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const lessonRoutes = require("./routes/lessonRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const progressRoutes = require("./routes/progressRoutes");
const fileRoutes = require("./routes/fileRoutes")

dotenv.config();

const app = express();


connectDB();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("EduFlow API Running");
});



app.use('/api/auth', authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/enrollment", enrollmentRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/admin", adminRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/file" , fileRoutes)

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});