import express from 'express';
import ResumeController from '../controllers/resume.controller.js';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = `public/resumes/${req.body.id}`;

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const ResumeRouter = express.Router();

ResumeRouter.post('/', express.urlencoded({ extended: true }), upload.single('file'), ResumeController.createResume);

ResumeRouter.get('/', ResumeController.getResumes);

ResumeRouter.get('/:id', ResumeController.getResumeById);

ResumeRouter.put('/:id', express.urlencoded({ extended: true }), upload.single('file'), ResumeController.updateResume);

ResumeRouter.delete('/:id', ResumeController.deleteResume);

export default ResumeRouter;