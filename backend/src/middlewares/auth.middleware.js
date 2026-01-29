// middleware/auth.middleware.js
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");


const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized - No token provided"
            });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("👉 DECODED TOKEN:", decoded);


        // 🔥 SAFE: handle both id / userId
        const userId = decoded.id || decoded.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Invalid token payload"
            });
        }

        const user = await User.findById(userId).select("-password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            });
        }

        req.user = user;
        next();

    } catch (err) {
        console.error("Auth middleware error:", err.message);
        return res.status(401).json({
            success: false,
            message: "Unauthorized - Invalid token"
        });
    }
};

module.exports = authenticate;
