import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Resume from "../models/Resume.js";

// =====================================================
// CREATE NEW RESUME
// POST: /api/resumes/create
// =====================================================
export const createResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    // Create new resume
    const newResume = await Resume.create({ userId, title });

    return res
      .status(201)
      .json({ message: "Resume created successfully", resume: newResume });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// =====================================================
// DELETE RESUME
// DELETE: /api/resumes/:resumeId
// =====================================================
export const resumeDelete = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

    const deleted = await Resume.findOneAndDelete({ userId, _id: resumeId });
    if (!deleted) {
      return res.status(404).json({ message: "Resume not found" });
    }

    return res.status(200).json({ message: "Resume deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// =====================================================
// GET RESUME BY ID (PRIVATE)
// GET: /api/resumes/:resumeId
// =====================================================
export const getResumeById = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

    const resume = await Resume.findOne({ userId, _id: resumeId });
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    const { __v, createdAt, updatedAt, ...resumeData } = resume.toObject();

    return res.status(200).json({ resume: resumeData });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// =====================================================
// GET PUBLIC RESUME BY ID
// GET: /api/resumes/public/:resumeId
// =====================================================
export const getPublicResumeById = async (req, res) => {
  try {
    const { resumeId } = req.params;

    const resume = await Resume.findOne({ public: true, _id: resumeId });
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    return res.status(200).json({ resume });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// =====================================================
// UPDATE RESUME
// PUT: /api/resumes/update
// =====================================================
export const updateResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId, resumeData, removeBackground } = req.body;
    const image = req.file;

    let updatedResumeData = JSON.parse(resumeData);

    // Handle profile image upload if provided
    if (image) {
      const imageBufferData = fs.createReadStream(image.path);

      const uploadResponse = await imagekit.upload({
        file: imageBufferData,
        fileName: "resume.png",
        folder: "user-resumes",
        transformation: {
          pre: `w-300,h-300,fo-face,z-0.75${removeBackground ? ",e-bgremove" : ""}`,
        },
      });

      updatedResumeData.profileImage = uploadResponse.url;

      // Delete local temp file
      fs.unlinkSync(image.path);
    }

    // Update resume
    const updatedResume = await Resume.findOneAndUpdate(
      { userId, _id: resumeId },
      updatedResumeData,
      { new: true }
    );

    if (!updatedResume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    return res.status(200).json({ message: "Resume updated successfully", resume: updatedResume });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
