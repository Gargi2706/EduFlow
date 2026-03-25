const express = require("express");
const User = require("../models/User");
const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");

// Admin Dashboard
exports.getAdminDashboard = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const totalCourses = await Course.countDocuments();
        const totalEnrollments = await Enrollment.countDocuments();

        res.status(200).json({
            success: true,
            data: {
                totalUsers,
                totalCourses,
                totalEnrollments
            },
            message: "Admin dashboard data retrieved successfully"
        });
    } catch (error) {
        console.error("Error fetching admin dashboard data:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Get all users - for admin dashboard
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");

        res.status(200).json({
            success: true,
            count: users.length,
            data: users,
            message: "Users retrieved successfully"
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Get all courses - for admin dashboard
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate("instructor", "name email");

        res.status(200).json({
            success: true,
            count: courses.length,
            data: courses,
            message: "Courses retrieved successfully"
        });
    } catch (error) {
        console.error("Error fetching courses:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Get all enrollments - for admin dashboard
exports.getAllEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.find()
            .populate("student", "name email")
            .populate("course", "title");

        res.status(200).json({
            success: true,
            count: enrollments.length,
            data: enrollments,
            message: "Enrollments retrieved successfully"
        });
    } catch (error) {
        console.error("Error fetching enrollments:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// BLOCK a user - for admin dashboard
exports.blockUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { isBlocked: true });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({
            success: true,
            message: "User blocked successfully"
        });
    } catch (error) {
        console.error("Error blocking user:", error);
        res.status(500).json({ success: false, message: "Server error" });

}};


// UNBLOCK a user - for admin dashboard
exports.unblockUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { isBlocked: false });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({
            success: true,
            message: "User unblocked successfully"
        });
    } catch (error) {
        console.error("Error unblocking user:", error);
        res.status(500).json({ success: false, message: "Server error" });      
    }};



//Reports -section for admin
exports.getAdminReports = async (req, res) => {
  try {
   
    const totalUsers = await User.countDocuments();
    const blockedUsers = await User.countDocuments({ isBlocked: true });
    const activeUsers = await User.countDocuments({ isBlocked: false });
    const totalCourses = await Course.countDocuments();
    const totalEnrollments = await Enrollment.countDocuments();


    const userGrowth = await User.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          users: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    const formattedUserGrowth = userGrowth.map((item) => ({
      month: `Month ${item._id}`,
      users: item.users,
    }));

    
    const enrollments = await Enrollment.aggregate([
      {
        $group: {
          _id: "$courseId",
          enrollments: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: "courses",
          localField: "_id",
          foreignField: "_id",
          as: "course",
        },
      },
      { $unwind: "$course" },
      {
        $project: {
          course: "$course.title",
          enrollments: 1,
        },
      },
    ]);


    const recentActivity = await Enrollment.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("userId", "name")
      .populate("courseId", "title");

    const formattedActivity = recentActivity.map((item) => ({
      user: item.userId?.name || "Unknown",
      action: `Enrolled in ${item.courseId?.title}`,
      date: new Date(item.createdAt).toLocaleString(),
    }));

    res.json({
      stats: {
        totalUsers,
        blockedUsers,
        activeUsers,
        totalCourses,
        totalEnrollments,
      },
      userGrowth: formattedUserGrowth,
      enrollments,
      recentActivity: formattedActivity,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching reports" });
  }
};

