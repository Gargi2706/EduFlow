const express = require("express");
const router = express.Router();
const { authorizeRoles} = require("../middleware/roleMiddleware");

const {
    getAdminDashboard ,
    getAllUsers,
    getAllCourses,
    getAllEnrollments,
    blockUser,
    unblockUser, 
    getAdminReports} = require("../controllers/adminController");

const verifyToken = require("../middleware/verifyToken");

router.get("/dashboard", verifyToken, authorizeRoles("Admin"), getAdminDashboard);
router.get("/users", verifyToken, authorizeRoles("Admin"), getAllUsers);
router.get("/courses", verifyToken, authorizeRoles("Admin"), getAllCourses);
router.get("/enrollments", verifyToken, authorizeRoles("Admin"), getAllEnrollments);
router.put("/users/:id/block", verifyToken, authorizeRoles("Admin"), blockUser);
router.put("/users/:id/unblock", verifyToken, authorizeRoles("Admin"), unblockUser);
router.get("/reports" , verifyToken , authorizeRoles("Admin") , getAdminReports)

module.exports = router;    
