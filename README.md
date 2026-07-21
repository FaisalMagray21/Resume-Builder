# 🚀 AI Resume Builder

An AI-powered Resume Builder built with the **MERN Stack** that helps users create professional, ATS-friendly resumes in minutes.
<<<<<<< HEAD
=======

The application allows users to build resumes manually, upload existing resumes for AI-powered parsing, enhance resume content using OpenAI, manage profile images through ImageKit, and export polished resumes as PDFs.

🌐 **Live Demo:** https://ai-resume-builder-beta-flame.vercel.app/

---

# ✨ Features

## 🤖 AI Powered Resume Enhancement

Leverages OpenAI to improve resume content automatically.

- Enhance Professional Summary
- Improve Job Descriptions
- Improve Project Descriptions
- ATS-Friendly Content Generation
- Professional Writing Suggestions

---

## 📄 Resume Upload & AI Parsing

Users can upload an existing resume and the AI automatically extracts information including:

- Personal Information
- Professional Summary
- Skills
- Experience
- Education
- Projects

The extracted information is automatically filled into the resume builder.

---

## 🎨 Multiple Resume Templates

Choose from professionally designed resume templates.

- Modern
- Minimal
- Professional
- Clean Layouts

Templates update instantly while editing.

---

## 🖼 Profile Image Management

Integrated with **ImageKit** for:

- Image Upload
- Automatic Optimization
- Fast Delivery
- Responsive Images

---

## 📥 Export Resume

Generate high-quality printable resumes.

- Download as PDF
- Professional Layout
- Print Ready
- ATS Friendly

---

## 🔐 Authentication

Secure user authentication using JWT.

- Register
- Login
- Protected Routes
- User-specific Resume Storage

---

## 📱 Responsive Design

Fully responsive across:

- Desktop
- Tablet
- Mobile

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## AI

- OpenAI API

Used for:

- Professional Summary Enhancement
- Job Description Enhancement
- Project Description Enhancement
- Resume Parsing

---

## Image Storage

- ImageKit

---

## PDF Generation

- html2pdf.js
- html2canvas
- jsPDF

---
>>>>>>> 5608366 (docs(readme): add comprehensive project documentation with setup, features, and API guide)

The application allows users to build resumes manually, upload existing resumes for AI-powered parsing, enhance resume content using OpenAI, manage profile images through ImageKit, and export polished resumes as PDFs.

<<<<<<< HEAD
🌐 **Live Demo:** https://ai-resume-builder-beta-flame.vercel.app/

---

# ✨ Features

## 🤖 AI Powered Resume Enhancement

Leverages OpenAI to improve resume content automatically.

- Enhance Professional Summary
- Improve Job Descriptions
- Improve Project Descriptions
- ATS-Friendly Content Generation
- Professional Writing Suggestions

---

## 📄 Resume Upload & AI Parsing

Users can upload an existing resume and the AI automatically extracts information including:

- Personal Information
- Professional Summary
- Skills
- Experience
- Education
- Projects

The extracted information is automatically filled into the resume builder.

---

## 🎨 Multiple Resume Templates

Choose from professionally designed resume templates.

- Modern
- Minimal
- Professional
- Clean Layouts

Templates update instantly while editing.

---

## 🖼 Profile Image Management

Integrated with **ImageKit** for:

- Image Upload
- Automatic Optimization
- Fast Delivery
- Responsive Images

---

## 📥 Export Resume

Generate high-quality printable resumes.

- Download as PDF
- Professional Layout
- Print Ready
- ATS Friendly

---

## 🔐 Authentication

Secure user authentication using JWT.

- Register
- Login
- Protected Routes
- User-specific Resume Storage

---

## 📱 Responsive Design

Fully responsive across:

- Desktop
- Tablet
- Mobile

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## AI

- OpenAI API

Used for:

- Professional Summary Enhancement
- Job Description Enhancement
- Project Description Enhancement
- Resume Parsing

---

## Image Storage

- ImageKit

---

## PDF Generation

- html2pdf.js
- html2canvas
- jsPDF

---

# 📸 Screenshots

> Add screenshots here

Example:

```
screenshots/
    dashboard.png
    resume-builder.png
    template.png
    preview.png
```

---

# 📂 Project Structure

```
Resume-Builder
│
├── client
│   ├── src
│   ├── components
│   ├── pages
│   ├── assets
│   └── templates
│
├── server
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── models
│   ├── configs
│   └── uploads
│
└── README.md
```

---

# ⚡ AI APIs

The backend provides AI endpoints for improving resume quality.

## Enhance Professional Summary

```
POST /api/ai/enhance-pro-sum
```

Input

```json
{
  "userContent":"Frontend developer with React experience..."
}
```

=======
---

# 📂 Project Structure

```
Resume-Builder
│
├── client
│   ├── src
│   ├── components
│   ├── pages
│   ├── assets
│   └── templates
│
├── server
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── models
│   ├── configs
│   └── uploads
│
└── README.md
```

---

# ⚡ AI APIs

The backend provides AI endpoints for improving resume quality.

## Enhance Professional Summary

```
POST /api/ai/enhance-pro-sum
```

Input

```json
{
  "userContent":"Frontend developer with React experience..."
}
```

>>>>>>> 5608366 (docs(readme): add comprehensive project documentation with setup, features, and API guide)
Returns an ATS-friendly professional summary.

---

## Enhance Job Description

```
POST /api/ai/enhance-job-desc
```

Enhances work experience descriptions using AI.

---

## Enhance Project Description

```
POST /api/ai/enhance-project
```

Improves project descriptions with:

- Better wording
- Technical impact
- ATS optimization
- Action verbs

---

## Upload Resume

```
POST /api/ai/upload-resume
```

Extracts resume information into structured JSON using OpenAI.

Extracted fields include:

- Personal Information
- Skills
- Experience
- Education
- Projects
- Professional Summary

---

# 🔧 Installation

## Clone Repository

```bash
git clone https://github.com/FaisalMagray21/Resume-Builder.git
```

```bash
cd Resume-Builder
```

---

## Backend

```bash
cd server
npm install
```

Create a `.env`

```env
PORT=5000

MONGODB_URI=YOUR_DATABASE_URL

JWT_SECRET=YOUR_SECRET

OPENAI_API_KEY=YOUR_OPENAI_KEY

OPENAI_MODEL=gpt-4.1-mini

IMAGEKIT_PUBLIC_KEY=YOUR_PUBLIC_KEY

IMAGEKIT_PRIVATE_KEY=YOUR_PRIVATE_KEY

IMAGEKIT_URL_ENDPOINT=YOUR_URL_ENDPOINT
```

Run

```bash
npm run dev
```

---

## Frontend

```bash
cd client

npm install

npm run dev
```

---

# 🚀 Future Improvements

- Resume Score Analyzer
- AI Interview Preparation
- Cover Letter Generator
- LinkedIn Profile Generator
- Resume Version History
- Multi-language Support
- Dark Mode
- Custom Themes

---

# 📌 Why This Project?

Writing a professional resume is difficult for many job seekers.

This project simplifies the entire process by combining modern web technologies with AI to automatically generate polished, ATS-friendly resumes that improve users' chances of passing applicant tracking systems and impressing recruiters.

---

# 👨‍💻 Author

**Faisal Mehmood**

GitHub

https://github.com/FaisalMagray21

LinkedIn

https://www.linkedin.com/in/faisalmehmood807/

---

# ⭐ Support

If you like this project,

⭐ Star the repository

🍴 Fork it

💡 Contribute with new features

---

# 📄 License

<<<<<<< HEAD
This project is licensed under the MIT License.
=======
This project is licensed under the MIT License.
>>>>>>> 5608366 (docs(readme): add comprehensive project documentation with setup, features, and API guide)
