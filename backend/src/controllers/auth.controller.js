const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
async function register(req, res) {
    try {
        const { fullname, email, password } = req.body;

        const isUserAlreadyExist = await userModel.findOne({ email });
        if (isUserAlreadyExist) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        const hashedpass = await bcrypt.hash(password, 10);

        const createduser = await userModel.create({
            fullname,
            email,
            password: hashedpass,
        });

        const token = jwt.sign(
            { id: createduser._id },              // ✅ ID ONLY
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax"
        });

        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: createduser._id,
                fullname: createduser.fullname,
                email: createduser.email
            }
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// LOGIN
async function login(req, res) {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            { id: user._id },                     // 🔥 FIXED HERE
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax"
        });

        res.status(200).json({
            message: "User logged in successfully"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// LOGOUT
async function logout(req, res) {
    res.clearCookie("token");
    res.status(200).json({
        message: "User logged out successfully"
    });
}

module.exports = {
    register,
    login,
    logout
};
