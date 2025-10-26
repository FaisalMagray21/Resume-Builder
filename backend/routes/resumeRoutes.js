import express from "express";
import upload from '../configs/multer.js'
import protect from "../middleware/authMiddleware.js";
import {
  createResume,
  resumeDelete,
  getResumeById,
  getPublicResumeById,
  updateResume,
} from "../controllers/resumeController.js";


// =====================================================
// ROUTES
// =====================================================

// ✅ Create new resume
// POST /api/resumes/create
const resumerouter=express.Router();
resumerouter.post("/create", protect, createResume);

// ✅ Delete a resume
// DELETE /api/resumes/:resumeId
resumerouter.delete("/delete/:resumeId", protect, resumeDelete);

// ✅ Get resume by ID (private)
resumerouter.get("/get/:resumeId", protect, getResumeById);

// ✅ Get public resume by ID
resumerouter.get("/public/:resumeId", getPublicResumeById);

// ✅ Update resume (with optional image upload)
resumerouter.put("/update", protect, upload.single("image"), updateResume);

export default resumerouter;
