import User from "../models/User.js";
import Resume from "../models/Resume.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Function to generate a JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// ==========================
// REGISTER USER
// ==========================
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check required fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate token
    const token = generateToken(newUser._id);
    newUser.password = undefined;

    return res.status(201).json({
      message: "User created successfully",
      token,
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// ==========================
// LOGIN USER
// ==========================
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate token
    const token = generateToken(user._id);
    user.password = undefined;

    return res.status(200).json({
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// ==========================
// GET USER BY ID (Protected)
// ==========================
export const getUserById = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.password = undefined;
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


//controller for getting user resume
//Get:/api/users/resumes
export const getUserResumes=async(req,res)=>{
  try {
    const userId=req.userId;

    ///return user resumes
    const resumes=await Resume.find({userId})
        return res.status(200).json({ resumes });
    
  } catch (error) {
        return res.status(400).json({ message: error.message });

  }
}