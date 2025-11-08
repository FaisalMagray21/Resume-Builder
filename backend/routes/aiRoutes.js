import express from "express";
import {
  enhanceProfessionalSummary,
  enhanceJobDescription,
  uploadResume,
  enhanceProjectDescription, // 👈 add this
} from "../controllers/aiController.js";
import protect from "../middleware/authMiddleware.js";

const aiRouter = express.Router();

// Route for enhancing professional summary
aiRouter.post("/enhance-pro-sum", enhanceProfessionalSummary);

// Route for enhancing job description
aiRouter.post("/enhance-job-desc", protect, enhanceJobDescription);

// ✅ New route for enhancing project description
aiRouter.post("/enhance-project", protect, enhanceProjectDescription);

// Route for uploading a resume (protected route)
aiRouter.post("/upload-resume", protect, uploadResume);

export default aiRouter;
