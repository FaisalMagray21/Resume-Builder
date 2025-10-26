import express from "express";
import {
  enhanceProfessionalSummary,
  enhanceJobDescription,
  uploadResume,
} from "../controllers/aiController.js";

import protect from '../middleware/authMiddleware.js'

const aiRouter = express.Router();

//  Route for enhancing professional summary
aiRouter.post("/enhance-pro-sum", enhanceProfessionalSummary);

//  Route for enhancing job description
aiRouter.post("/enhance-job-desc", enhanceJobDescription);

//  Route for uploading a resume (protected route)
aiRouter.post("/upload-resume", protect, uploadResume);

export default aiRouter;
