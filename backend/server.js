const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const courseRoutes = require("./routes/courseRoutes");
const adminRoutes = require("./routes/adminRoutes");


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

const lessonRoutes = require("./routes/lessonRoutes");

app.use("/api", lessonRoutes);

app.use("/api/enrollments", enrollmentRoutes);

app.use("/api/admin", adminRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});